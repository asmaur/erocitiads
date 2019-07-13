<template>
    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3>VIP {{pk}}</h3>
                <!--<div class="price">
                                            <span class="devise-symbol">R$</span> <span class="plan-amount">50,00</span><span class="plan-period">/mês</span>
        </div>-->
            </div>

            <div class="card-body card-list">


                <p>
                    O Selo <strong>VIP</strong> é concedido aos parceiros, seja por tempo de uso ou pelos números de *Plano Diamond* conquistados.
                </p>

            </div>

            <div class="card-footer">
                <button class="btn btn-primary btn-block ativar" @click="SoliciteVip">SOLICITAR SEU SELO VIP</button>
               <!-- <a href="plano.html" class="btn btn-primary btn-block disabled">Aprovado</a> -->
            </div>
        </div>
    </div>
</template>

<script>
    import ax from '../api'

    export default {
        name: "VueVip",
        props: {
            pk: Number,
        },
        data() {
            return {
                enabled: null,
            }
        },
        methods: {
            SoliciteVip() {
                ax.post("mem/" + this.pk + "/vip/")
                    .then(response => {
                        this.$noty.info(response.data.message)
                    })
            }
        },
    }
</script>