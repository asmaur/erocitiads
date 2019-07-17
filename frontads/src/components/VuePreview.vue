<template>


    <div>

        <DashNav />

        <!-- item present -->


        <div id="present" class="d-flex align-items-center justify-content-center">

            <div class="container">
                <div class="row">

                    <div class="col-md-8 offset-md-2 text-center">

                        <div style="display: flex; align-items: center; justify-content: space-between; margin: 1rem;">
                            <i class="far fa-star" style="color: #fff;"></i>

                            <h3 class="display-4"> {{per.nome}} {{per.sobrenome}} </h3>

                            <i class="far fa-star" style="color: #fff;"></i>
                        </div>


                        <em>Categoria: {{per.category}}</em> <br>
                        <em>Age: {{per.idade}} anos</em>
                        <br>
                        <em>Disponível para: <em v-show="dados.men"> Homens,</em> <em v-show="dados.women"> Mulheres,</em> <em v-show="dados.couple">Casais</em></em> <br>

                        <div class="wiz-item-contact">
                            <a :href="'tel:+'+per.phone" target="_blank">
                                <i class="fas fa-phone fa-3x" style="transform: rotate(90deg)"></i>
                            </a>
                            <a :href="'https://api.whatsapp.com/send?phone='+per.phone+'&text='" target="_blank">
                                <i class="fab fa-whatsapp fa-3x"></i>
                            </a>

                            <a href="https://t.me/ivy-salazar/text='Hello World'" target="_blank" v-if="dados.twitter">
                                <i class="fab fa-twitter fa-3x"></i>
                            </a>
                            <a href="https://t.me/ivy-salazar/text='Hello World'" target="_blank" v-if="dados.instagram">
                                <i class="fab fa-instagram fa-3x"></i>
                            </a>

                        </div>

                        <button class="btn btn-warning btn-block" data-toggle="modal" data-target="#more-detail" id="detail" style="margin: .5rem;"> <i class="fa fa-plus"></i> Detalhes</button>

                    </div>

                </div>
            </div>

        </div>


        <div class="modal fade" id="more-detail" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content ">

                    <div class="modal-header">
                        <h5 class="modal-title">Detalhe da Modelo</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">

                        <div class="container">
                            <div class="row">


                                <div class="col-md-12 offset-md-">

                                    <ul class="list-group">
                                        <li class="list-group-item active text-center">Perfil</li>
                                        <li class="list-group-item">Idade - {{per.idade}} anos</li>
                                        <li class="list-group-item"> Altura - {{per.altura}} m</li>
                                        <li class="list-group-item"> Peso - {{per.peso}} kg</li>
                                        <li class="list-group-item">Peitos - {{dados.seios}}</li>
                                        <li class="list-group-item"> Cabelos - {{dados.cabelo}}</li>
                                        <li class="list-group-item" v-if="per.dote"> Cabelos - {{per.dote}} cm</li>
                                        <li class="list-group-item">
                                            <p class="mb-1">{{per.description}}</p>

                                        </li>
                                    </ul>


                                </div>

                            </div>

                            <div class="row">

                                <div class="col-md-12">

                                    <ul class="list-group" style="margin-top: 1rem;">
                                        <li class="list-group-item active text-center">Valores</li>
                                        <li class="list-group-item" v-if="val.caches_30min">30min - R$ {{val.caches_30min}}</li>
                                        <li class="list-group-item" v-if="val.caches_1h">1h - R$ {{val.caches_1h}}</li>
                                        <li class="list-group-item" v-if="val.caches_2h"> 2hs - R$ {{val.caches_2h}}</li>
                                        <li class="list-group-item" v-if="val.caches_3h"> 3hs - R$ {{val.caches_3h}}</li>
                                        <li class="list-group-item" v-if="val.caches_4h"> 4hs - R$ {{val.caches_4h}}</li>
                                        <li class="list-group-item" v-if="val.caches_pernoite_dia_util">Pernoite dia útil - R$ {{val.caches_pernoite_dia_util}}</li>
                                        <li class="list-group-item" v-if="val.caches_sexta_noite"> Sexta noite - R$ {{val.caches_sexta_noite}}</li>
                                        <li class="list-group-item" v-if="val.caches_fim_semana_dia"> Fim de semana dia - R$ {{val.caches_fim_semana_dia}}</li>
                                        <li class="list-group-item" v-if="val.caches_sabado_noite"> Sabádo noite - R$ {{val.caches_sabado_noite}}</li>

                                    </ul>

                                    <p class="text-center"> <strong> Adicionais podem ser cobrados.</strong> </p>


                                </div>

                            </div>


                            <div class="row">

                                <div class="col-md-12 offset-md-">

                                    <ul class="list-group" style="margin-top: 1rem;">
                                        <li class="list-group-item active text-center">Serviços</li>
                                        <li class="list-group-item" v-show="serv.beijo_na_boca">Beijo na boca</li>
                                        <li class="list-group-item" v-show="serv.duplas">Duplas</li>
                                        <li class="list-group-item" v-show="serv.ejacula_corpo">Ejaculação corpo</li>
                                        <li class="list-group-item" v-show="serv.massagem_erotica">Massagem Erótica</li>
                                        <li class="list-group-item" v-show="serv.fan_disfarces">Fantasias e disfarces</li>
                                        <li class="list-group-item" v-show="serv.namoradinha">Namoradinha</li>
                                        <li class="list-group-item" v-show="serv.pse">PSE</li>
                                        <li class="list-group-item" v-show="serv.sexo_anal">Sexo Anal</li>
                                        <li class="list-group-item" v-show="serv.sexo_oral_sem_cam">Sexo Oral (sem camisinha)</li>
                                        <li class="list-group-item" v-show="serv.sexo_oral_com_cam">Sexo Oral (com camisinha)</li>
                                    </ul>


                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12 offset-md-">

                                    <ul class="list-group" style="margin-top: 1rem;">
                                        <li class="list-group-item active text-center">Serviços Especiais</li>
                                        <li class="list-group-item" v-show="esp.beijo_negro">Beijo negro</li>
                                        <li class="list-group-item" v-show="esp.chuva_dourada">Chuva dourada</li>
                                        <li class="list-group-item" v-show="esp.fetichismo">Fetichismo</li>
                                        <li class="list-group-item" v-show="esp.garganta_profunda">Garganta profunda</li>
                                        <li class="list-group-item" v-show="esp.sado_duro">Sado duro</li>
                                        <li class="list-group-item" v-show="esp.sado_suave">Sado suave</li>
                                        <li class="list-group-item" v-show="esp.squirting">Squirting</li>
                                        <li class="list-group-item" v-show="esp.strap_on">Strap on</li>
                                    </ul>


                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12 offset-md-">

                                    <ul class="list-group" style="margin-top: 1rem;">
                                        <li class="list-group-item active text-center">Locais</li>
                                        <li class="list-group-item" v-show="loc.hotel">Hoteis</li>
                                        <li class="list-group-item" v-show="loc.motel">Moteis</li>
                                        <li class="list-group-item" v-show="loc.local_proprio">Local Próprio</li>
                                        <li class="list-group-item" v-show="loc.sobre_convite">Sobre convite (ir até o cliente)</li>

                                    </ul>


                                </div>

                            </div>



                        </div>


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>

                    </div>


                </div>
            </div>
        </div>


        <!-- end item present -->




        <!-- item galery -->

        <div id="galery">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <h3 style="margin: 1rem;">Minhas Fotos</h3>
                    </div>
                </div>
            </div>


            <section class="gallery-block grid-gallery" style="background-color: #fff;">
                <div class="container">

                    <div class="row" id="wiz-galery">
                        <a :href="img_url+per.capa" class="col-sm-12 col-md-10 col-lg-10 item">
                            <img class="img-fluid image scale-on-hover" id="wiz-large" :src="img_url+per.capa">

                        </a>

                        <a v-for="imag in fotos" :href="img_url+imag.image_erociti" :key="imag.id" class="col-sm-12 col-md-6 col-lg-4 item">
                            <img class="img-fluid image scale-on-hover" :src="img_url+imag.image_erociti">
                        </a>


                        <!--  <a href="img/gallery-list-5.jpg" class="col-sm-12 col-md-6 col-lg-4 item">
                            <img class="img-fluid image scale-on-hover" src="../assets/img/gallery-list-5.jpg">
                        </a>


                        <a href="img/gallery-list-8.jpg" class="col-sm-12 col-md-6 col-lg-4 item">
                            <img class="img-fluid image scale-on-hover" src="../assets/img/gallery-list-8.jpg">
                        </a> -->


                    </div>
                </div>
            </section>

        </div>

        <!-- galery -->





    </div>


</template>

<script>
    import DashNav from "@/components/DashNav.vue";
    import $ from "jquery"
    import ax from "../api.js";
    


    export default {
        name: "VuePreview",

        data() {
            return {
                per: {},
                dados: {},
                esp: {},
                val: {},
                fotos: {},
                loc: {},
                serv: {},
                img_url: 'https://api.erociti.com',
            }
        },
        components: {
            DashNav,
        },
        methods: {

            getData() {
                ax.get("pf/" + this.$route.params.id + "/")
                    .then(response => [
                        this.per = response.data,
                        this.dados = response.data.dados[0],
                        this.esp = response.data.especiais[0],
                        this.loc = response.data.locais[0],
                        this.val = response.data.valores[0],
                        this.serv = response.data.services[0],
                        this.fotos = response.data.images,
                    ])
                    .catch(() => {
                        this.$noty.error("Erro ao carregar dados..!");
                    })
            },

        },
        beforeUpdate() {
            $(document).ready(function() {
                $("#wiz-galery").lightGallery({
                    download: false,
                });
            });
        },

        created() {
            this.getData();

        },

    }
</script>


<style scoped src="@/assets/css/preview.css"></style>