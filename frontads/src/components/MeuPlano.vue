<template>
    <div class="row">
        <div class="col-md-6 offset-md-3">
            <h2>Meus Planos</h2>
        </div>
        <div class="col-md-4" v-for="plano in planos" :key="plano.id">
            <div class="card">
                <div class="card-header">
                    <h3>{{plano.membership_type}}</h3>

                </div>

                <div class="card-body card-list">

                    <p>
                        <small>Esse plano é valido por {{plano.valide_time}} dias.</small>
                    </p>
                </div>

                <div class="card-footer">

                    <a href="plano.html" class="btn btn-primary btn-block disabled">Ativo</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
import ax from '../api.js'
    
    export default {
        name: "MeuPlano",
        props: {
            pk: Number,
        },
        data() {
            return {
                planos: {},
            }
        },
        methods: {
            getPlanos() {
                ax.get('mem/' + this.$route.params.id + '/planos/', )
                    .then(response => [this.planos = response.data, ])
                    .catch(response => {
                        console.log(response);
                    });
            },
        },
        created(){
            this.getPlanos();
        },
    }
</script>