<template>

    <div class="card border-primary text-center">

        <div class="card-header">
            <h6>Comprar Crédito. </h6>
        </div>

        <div class="card-body">
            <ul class="text-left">
                <li>Compra mínima de <strong>R$59.90</strong> </li>
               <!-- <li>Na janela do Pagseguro, <strong>Favor usar o email da sua conta.</strong> </li> -->
                
            </ul>
            <div class="input-group">
                <input type="number" v-validate="{decimal:4, min_value:59.90, required:true}" min="59.90" step="10.0" class="form-control" name="coin" v-model="coin" aria-label="Amount (to the nearest dollar)" required>
                <div class="input-group-append">
                    <span class="input-group-text">R$</span>
                </div>

            </div>

            <ul>
                <li v-for="error in errors.collect('coin')" class="alert-danger" :key="error.index">{{ error }}</li>
            </ul>
            <!--
                                <input type="image" name="submit" src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/99x61-comprar-assina.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" @click="pay"  />
                                -->
            <button class="btn btn-outline-success pay" @click="pay">
                <img src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/99x61-comprar-assina.gif" class="img-fluid" alt="">
            </button>

        </div>
    </div>



</template>


<script>
    import ax from "../api.js";

    export default {
        name: "PayCoins",
        data() {
            return {
                coin: null,
                transaction: {},
                agente: {},
                user: {},
            }
        },
        computed: {
            vcoin: function() {

                var val = parseFloat(this.coin).toFixed(2);

                return val;
            }
        },
        methods: {


            checkout() {



                //var token = "E911C270C925492E8E57C771F713E5AB"
                //var url = "https://sandbox.pagseguro.uol.com.br/v2/checkout" //?email=am.amauri@outlook.com&token='+token;

                const requestBody = {
                    currency: "BRL",
                    itemId: "0101",
                    itemDescription: "Créditos Erociti",
                    itemAmount: this.vcoin,
                    itemQuantity: 1,
                    reference: "REF" + (new Date).toISOString().replace(/\D/g, ''),
                    senderName: this.user.first_name + ' ' + this.user.last_name, //Jose Comprador
                    senderAreaCode: this.agente.code_area,
                    senderPhone: this.agente.phone, //999999999
                    senderEmail: this.user.email, //comprador@uol.com.br 
                    //senderCpf: this.agente.cpf,
                    shippingAddressRequired: false,

                }

                ax.post("pay/checkout/", requestBody)
                    .then((response) => {
                        //console.log(response.data)
                        this.transaction = response.data
                        //console.log(response.data.code)

                    })
                    .catch()


            },

            pay() {

                this.$validator.validateAll().then((valid) => {

                    if (valid) {

                        this.$noty.info("Processando...", {
                            timeout: 8000,
                        })

                        this.checkout();


                        setTimeout(() => {

                            var checkoutCode = this.transaction.code
                            var self = this;
                            var callback = {

                                success: function(transactionCode) {

                                    self.createTransaction(transactionCode)
                                    //alert("transc "+ transactionCode);
                                    self.$noty.success("Os créditos foram processado. Verifique sua conta.") //, código de transação: " + transactionCode)
                                },
                                abort: function() {
                                    //Insira os comandos para quando o usuário abandonar a tela de pagamento.

                                    self.$noty.error("Abortado");
                                    //self.createTransaction("transac Abortado");
                                    //console.log("abortado");
                                }
                            };
                            //Chamada do lightbox passando o código de checkout e os comandos para o callback

                            var isOpenLightbox = PagSeguroLightbox(checkoutCode, callback);


                            /* Redireciona o comprador, caso o navegador não tenha suporte ao Lightbox */
                            if (!isOpenLightbox) {
                                //location.href = "https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=" + checkoutCode;
                                location.href = "https://pagseguro.uol.com.br/v2/checkout/payment.html?code=" + checkoutCode;
                            }



                        }, 3000);

                    } else {
                        this.$noty.error("Verifique o valor da sua compra")
                        return;
                    }
                });


            }
        },
        created() {
            this.agente = JSON.parse(localStorage.getItem("agente"));
            this.user = JSON.parse(localStorage.getItem("user"));
        },


    }
</script>