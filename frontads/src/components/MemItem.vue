<template>

    <div class="col-md-4">

        <div class="card">
            <div class="card-header">
                <h3>{{plano.name}} </h3>
                <div class="price">
                    <span class="devise-symbol">R$</span> <span class="plan-amount">{{formatPrice(plano.price)}}</span><span class="plan-period">/{{plano.valide_time}} dias</span>
                </div>
            </div>

            <div class="card-body card-list">
                <ul type="1" v-html="plano.beneficios"></ul>


                <p> <small>Esse plano é valido por {{plano.valide_time}} dias.</small> </p>
            </div>

            <div class="card-footer">
                <!--  <router-link :to="'/pay/'+slug+'/'+pk+'/'+plano.id+'/'" class="btn btn-primary btn-block ativar" disabled="PlanStatus" >ATIVAR</router-link> -->
                <button class="btn btn-primary btn-block ativar" @click="setPlano">ATIVAR </button>
                <!--  <a href="plano.html" class="btn btn-primary btn-block disabled">Aprovado</a> -->

            </div>

        </div>

    </div>

</template>

<script>
    import ax from '../api.js'

    export default {
        name: "MemItem",
        props: {
            plano: Object,
            pk: Number,
            slug: String,
            planos: {},

        },
        data() {
            return {
                //isBasic: true,
                plan: [],
                datus: {},
                user: {},
            }
        },
        computed: {

        },
        methods: {
            goPlano() {
                //this.$router.push('/pay/'+this.slug+'/'+this.pk+'/'+this.plano.id+'/')
            },
            setPlano() {
                this.datus.perId = this.$route.params.id;
                this.datus.userId = this.user.id;
                this.datus.planoId = this.plano.id;

                ax.post("pay/setplanos/", this.datus)
                    .then(response => {
                        this.$noty.success(response.data.message)
                        setTimeout(() => {
                            location.reload();
                        }, 2000);
                    })
                    .catch(error => {
                        this.$noty.error(error.response.data.message)
                    })
            },
            formatPrice(value) {
                let val = (value / 1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },



        },
        created() {
            this.user = JSON.parse(localStorage.getItem("user"));
        }

    }
</script>