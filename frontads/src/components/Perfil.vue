<template>
    <div id="profile">
        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2>{{per.nome}} {{per.sobrenome}}</h2>
                    </div>
                </div>
            </div>
        </div>

        <div id="dash">
            <nav>
                <div class="nav nav-tabs justify-content-center nav-fill" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="true">Perfil</a>
                    <a class="nav-item nav-link" id="nav-planos-tab" data-toggle="tab" href="#nav-planos" role="tab" aria-controls="nav-planos" aria-selected="false">Planos</a>
                    <a class="nav-item nav-link" id="nav-stats-tab" data-toggle="tab" href="#nav-stats" role="tab" aria-controls="nav-stats" aria-selected="false">Statistik</a>
                </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <!-- profile -->
                    <div class="accordion" id="accordionExample">
                        <VuePerfil :per="per" :slug="per.slug" />
                        <VueDados :dado="dado" :slug="per.slug" />
                        <VueService :service="serv" :slug="per.slug" />
                        <VueSpecial :especiais="esp" :slug="per.slug" />
                        <VueValor :valor="val" :slug="per.slug" />
                        <VueLocais :locais="loc" :slug="per.slug" />
                        <VueFotos :slug="per.slug" :pk="per.pk" />
                    </div>

                    <!-- end profile --->
                </div>

                <div class="tab-pane fade" id="nav-planos" role="tabpanel" aria-labelledby="nav-planos-tab">
                    <div class="content" style="padding: 1rem;">
                        <div class="container">
                            <MeuPlano :pk="per.pk" />
                            <hr>
                            <VueVip :pk="per.pk" />
                            <hr>
                            <VuePlano :pk="per.pk" :slug="per.slug"/>

                        </div>

                        <hr>
                    </div>
                </div>

                <div class="tab-pane fade" id="nav-stats" role="tabpanel" aria-labelledby="nav-stats-tab">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center" style="margin-top: 2rem;">
                                <h2>Estatistica do dia</h2>
                            </div>
                            <VueKlic :pk="per.pk" />
                            <VueView :pk="per.pk" />

                        </div>

                        <div class="row">
                            <div class="col-md-12 text-center" style="margin-top: 2rem;">
                                <h2>Estatistica do mês</h2>
                            </div>

                            <VueKlicMes :pk="per.pk" />
                            <VueViewMes :pk="per.pk" />


                        </div>
                    </div>
                </div>
            </div>
            
            
             <div class="container">
            <div class="row">
                <div class="col-6">
                    <a href="" class="btn btn-primary btn-block" id="deletar" data-toggle="modal" data-target="#deletar-perfil" style="margin-top:2rem;">Deletar perfil</a>
                </div>
                <div class="col-6">
                    <router-link :to="'/preview/'+per.slug+'/'+per.pk+'/'" class="btn btn-primary btn-block" id="preview" style="margin-top:2rem;">
                        Ver preview <i class="fa fa-external-link-square-alt"></i></router-link>
                </div>

            </div>


            <!-- Modal deletar perfil -->
            <div class="modal fade" id="deletar-perfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">DELETAR O PERFIL</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5>Tem certeza que deseja deletar esse perfil ?</h5>
                            <p>Ao deletar o perfil, não será possível restaurar ou recuperar os dados relativos a esse perfil.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mr-auto fechar" data-dismiss="modal">FECHAR</button>
                            <button type="button" class="btn btn-primary entrar" @click="deleteProfile(per.pk)">DELETAR PERFIL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
        </div>
    </div>
</template>

<script>
    
    
    
    import VuePerfil from "@/components/VuePerfil.vue";
    import VueValor from "@/components/VueValor.vue";
    import VueService from "@/components/VueService.vue";
    import VueLocais from "@/components/VueLocais.vue";
    import VueSpecial from "@/components/VueSpecial.vue";
    import VueDados from "@/components/VueDados.vue";
    import VueFotos from "@/components/VueFotos.vue";
    import VuePlano from "@/components/VuePlano.vue";
    import VueVip from "@/components/VueVip.vue";
    import MeuPlano from "@/components/MeuPlano.vue";
    import VueKlic from "@/components/VueKlic.vue";
    import VueView from "@/components/VueView.vue";
    import VueKlicMes from "@/components/VueKlicMes.vue";
    import VueViewMes from "@/components/VueViewMes.vue";

    import ax from "../api.js";
    

    export default {
        name: "Perfil",
        data() {
            return {
                per: {},
                dado: {},
                esp: {},
                val: {},
                foto: {},
                loc: {},
                pf: null,
                serv: {},
                agente: {},
            };
        },
        components: {
            VuePerfil,
            VueValor,
            VueService,
            VueLocais,
            VueSpecial,
            VueDados,
            VueFotos,
            VuePlano,
            MeuPlano,
            VueVip,
            VueKlic,
            VueView,
            VueKlicMes,
            VueViewMes,
        },
        methods: {
            getModelos() {
                ax.get("pf/" + this.$route.params.id + "/")
                    .then(response => [
                        (this.per = response.data),
                        (this.dado = response.data.dados[0]),
                        (this.esp = response.data.especiais[0]),
                        (this.loc = response.data.locais[0]),
                        (this.serv = response.data.services[0]),
                        (this.val = response.data.valores[0]),
                        (this.pf = response.data.pk),
                        (this.foto = response.data.pk)
                    ])
                    .catch(response => {
                        console.log(response);
                    });
            },
            deleteProfile(){
                ax.delete("pf/" + this.$route.params.id + "/")
                    .then(response => {
                        this.$noty.success(response.data.message)
                    this.agente = JSON.parse(localStorage.getItem("agente"))
                        setTimeout(()=>{
                                this.$router.push("/dash/"+this.agente.id+"/")
                            },1000);
                    })
                    .catch(error => {
                        this.$noty.error(error.response.data.message)
                    });
            },
        },

        created() {
            this.getModelos();
        }
    };
</script>

<style scoped>
</style>