<template>
    <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="card">
            <div class="card-body">
                <div class="viz">
                    <MesGraph v-if="loaded" :chart-data="views" :chart-labels="labels" label="Estatistica do mês: Visualizações" />
                </div>

                <!--  <div class="graf">grafico</div> -->
            </div>

            <div class="card-footer">
                <h6>
                    <i class="fas fa-clock"></i> Data: {{date()}}
                </h6>
            </div>
        </div>
    </div>
</template>

<script>
    import ax from '../api.js'
    import MesGraph from "@/components/MesGraph.vue"

    export default {
        name: "VueViewMes",
        data() {
            return {

                loaded: false,
                views: [],
                labels: [],
            }
        },
        props: {
            pk: Number,
        },
        components: {
            MesGraph,
        },
        methods: {

            resetState() {
                this.loaded = false
                this.showError = false
            },
            date() {
                var letre = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
                var ganme = new Date();

                return letre[ganme.getMonth() + 1] + '/' + ganme.getFullYear();

            },

            getViews(v) {
                this.resetState()

                ax.get('views/' + v + '/months/')
                    .then(response => {

                        this.views = response.data.map(views => views.views)
                        this.labels = response.data.map(views => views.created)

                        this.loaded = true
                    })
                    .catch()
            },


        },
        mounted() {
            this.month = new Date();
        },

        watch: {
            pk: function(newpk) {
                this.getViews(newpk);
            },
        },
    }
</script>

<style scoped>
    .line-chart {
        height: 300px;
    }
</style>