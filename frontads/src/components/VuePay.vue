<template>

    <div>

        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2>DashBoad</h2>

                    </div>

                </div>
            </div>

        </div>


        <div id="dash">

            <div class="container">

                <div class="row">

                    <div class="col-md-6 offset-md-3 text-center">
                        <h3>Plano {{plano.membership_type}}</h3>
                        <p>valor: R$ {{plano.price}}</p>
                        <p>Plano valido por {{plano.valide_time}} dias</p>
                        {{code}}

                    </div>

                    <!--  <div class="col-md-6">
                        
                     I   <form @submit.prevent="pay">  method="post" action="https://pagseguro.uol.com.br/checkout/checkout.jhtml"> -->
                    <!-- <input type="hidden" name="email" value="suporte@lojamodelo.com.br" />
                          <input type="hidden" name="tipo" value="CBR" />
                          <input type="hidden" name="moeda" value="BRL" />
                          <input type="hidden" name="item_id" value="12345" />
                          <input type="hidden" name="item_descr" value="Descrição do item a ser vendido" />
                          <input type="hidden" name="item_quant" value="1" />
                          <input type="hidden" name="item_valor" value="100" />
                          <input type="hidden" name="frete" value="0" />
                          <input type="hidden" name="peso" value="0" /> 
                          <input type="image" name="submit" src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/99x61-comprar-assina.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" />
                        </form>
                        
                    </div> -->


                </div>
            </div>

            <div class="container">
                <div class="row">

                    <div class="col-md-6 offset-md-3">

                        <input type="image" name="submit" src="https://p.simg.uol.com.br/out/pagseguro/i/botoes/pagamentos/99x61-comprar-assina.gif" alt="Pague com PagSeguro - é rápido, grátis e seguro!" @click="pay" />



                    </div>
                </div>
            </div>
        </div>


    </div>

</template>


<script>
    import ax from "../api.js";
    //import axios from 'axios';
    //import qs from 'qs'

    export default {
        name: "VuePay",

        data() {
            return {
                
                plano: {},
                code: null,
                moeda: null,
                currency: "BRL",
                itemId: "0001",
                itemDescription: null,
                itemAmount: null,
                itemQuantity: 1,
                reference: "REF1234",
                senderName: null, //Jose Comprador
                senderAreaCode: null,
                senderPhone: null, //999999999
                senderEmail: null, //comprador@uol.com.br

                shippingAddressRequired: false,
                timeout: 25,
                enableRecover: false,
                transaction: {},
                agente: {},
                user: {},
                datus: {},
            }
        },

        methods: {

            getPlano() {
                ax.get("mem/" + this.$route.params.pk + "/", )
                    .then(response => {
                        this.plano = response.data
                    })
            },

            checkout() {

                //var token = "E911C270C925492E8E57C771F713E5AB"
                //var url = "https://sandbox.pagseguro.uol.com.br/v2/checkout" //?email=am.amauri@outlook.com&token='+token;

                const requestBody = {
                    currency: "BRL",
                    itemId: "0001",
                    itemDescription: this.plano.description,
                    itemAmount: this.plano.price,
                    itemQuantity: 1,
                    reference: "REF1234",
                    senderName: this.user.first_name + ' ' + this.user.last_name, //Jose Comprador
                    senderAreaCode: this.agente.code_area,
                    senderPhone: this.agente.phone, //999999999
                    senderEmail: "agente@sandbox.pagseguro.com.br", //this.user.email, //comprador@uol.com.br 
                    senderCpf: this.agente.cpf,
                    shippingAddressRequired: false,

                }



                ax.post("pay/checkout/", requestBody)
                    .then((response) => {
                        //console.log(response.data)
                        this.transaction = response.data
                        //console.log(response.data.code)

                    })
                    .catch((error) => {
                        console.log(error.response.data)
                    })
            },

            createTransaction: function(code) {
                //console.log(code)
                
                this.datus.perId = this.$route.params.id
                this.datus.userId = this.user.id
                this.datus.planoId = this.plano.id
                this.datus.transactionCode = code


                //console.log(this.datus)
                ax.post("pay/transactions/", this.datus)
                    .then(response => {
                        //console.log(response.data.message)
                        this.$noty.success(response.data.message)
                        this.$noty.success("Feche a janela de pagamento.")
                    })
                    .catch(error => {
                        this.$noty.error(error.response.data.message)
                    }) 


            },

            pay() {


                this.checkout();


                setTimeout(() => {

                    var checkoutCode = this.transaction.code
                    var self = this;
                    var callback = {
                        
                        success: function(transactionCode) {
                            
                            self.createTransaction(transactionCode)
                            //alert("transc "+ transactionCode);
                            //self.$noty.success("Compra feita com sucesso") //, código de transação: " + transactionCode)
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


                    // Redireciona o comprador, caso o navegador não tenha suporte ao Lightbox
                    if (!isOpenLightbox) {
                        location.href = "https://sandbox.pagseguro.uol.com.br/v2/checkout/payment.html?code=" + checkoutCode;
                    }



                }, 3000);


            },



        },
        created() {
            this.getPlano();
            this.agente = JSON.parse(localStorage.getItem("agente"));
            this.user = JSON.parse(localStorage.getItem("user"));
        },
        watch: {
          
        },
    }
</script>


<style scoped>
    input {
        width: 150px;
    }
</style>