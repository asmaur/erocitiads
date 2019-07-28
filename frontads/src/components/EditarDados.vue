<template>
    <div>
        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2 v-if="dados.perfil">{{dados.perfil.nome}} {{dados.perfil.sobrenome}}</h2>
                    </div>
                </div>
            </div>
        </div>

        <div id="dash">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                        <!-- profile -->

                        <div class="card" style="margin-bottom: 2rem;">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-transform: uppercase;">Detalhe do Perfil</button>
                                </h5>
                            </div>

                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <form class="text-left" @submit.prevent="addData">
                                        <div class="form-row">
                                            <div class="form-group col-md-6">
                                                <label for="twitter">Conta twitter</label>
                                                <input type="text" class="form-control" id="twitter" name="twitter" v-model="twitter" placeholder="@nome_do_usuario" pattern="(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)">
                                           
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="instagram">Conta instagram</label>
                                                <input type="text" class="form-control" id="instagram" v-model="instagram" placeholder="@nome_de_usuario" pattern="(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)">
                                            </div>
                                        </div>

                                        <hr>

                                        <div class="form-row">
                                            <div class="form-group col-md-12 text-center">
                                                <h5>DETALHES</h5>
                                            </div>

                                            <div class="form-group col-md-3">
                                                <label for="cabelo">Cabelos</label>
                                                <select class="form-control" id="cabelo" v-model="cabelo" name="cabelo" required>
                                                    <option value="Loira">Loiras</option>
                                                    <option value="Morena">Morenas</option>
                                                    <option value="Ruiva">Ruivas</option>
                                                    <option value="Cacheada">Cacheadas</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-3">
                                                <label for="etnia">Etnia</label>
                                                <select class="form-control" id="etnia" name="etnia" v-model="etnia" required>
                                                    <option value="Branca">Brancas</option>
                                                    <option value="Preta">Pretas</option>
                                                    <option value="Negra">Negras</option>
                                                    <option value="Morena">Morenas</option>
                                                    <option value="oriental">Orientais</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-3">
                                                <label for="seios">Seios</label>
                                                <select class="form-control" id="seios" name="seios" v-model="seios">
                                                    <option value="Naturais">Naturais</option>
                                                    <option value="Naturais Pequenos">Naturais Pequenos</option>
                                                    <option value="Naturais Médios">Naturais Médios</option>
                                                    <option value="Naturais Grandes">Naturais Grandes</option>
                                                    <option value="Siliconada">Siliconada</option>
                                                    <option value="Operada">Operada</option>
                                                    
                                                </select>
                                            </div>

                                            <div class="form-group col-md-3">
                                                <label for="seios">Tipo Físico</label>
                                                <select class="form-control" id="tipo" name="tipo" v-model="tipo" required>
                                                    <option value="Magra">Magra</option>
                                                    <option value="Mignon">Mignon</option>
                                                    <option value="Alta">Alta</option>
                                                    <option value="BBW">BBW</option>
                                                    <option value="Fitness">Fitness</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-3">
                                                <label for="dote">Dote(cm)</label>
                                                <input type="number" min="10" step="1" class="form-control" id="dote" name="dote" v-model="dote" placeholder>
                                            </div>
                                        </div>

                                        <div class="form-row">
                                            <div class="form-group col-md-12 text-center">
                                                <h5>ATENDIMENTO</h5>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="men" name="men" v-model="men" style>
                                                    <label class="custom-control-label" for="men">Homens</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="women" name="women" v-model="women">
                                                    <label class="custom-control-label" for="women">Mulheres</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="couple" name="couple" v-model="couple">
                                                    <label class="custom-control-label" for="couple">Casais</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="modal-footer" style="display: flex; justify-content: space-between;">

                                            <!-- <button type="reset" class="btn btn-secondary fechar" data-dismiss="modal">Resetar</button> -->
                                            <button type="submit" class="btn btn-primary entrar">Salvar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ax from "../api.js";
    import $ from "jquery"


    export default {
        name: "EditarDados",
        data() {
            return {
                dados: {},
                twitter: null,
                instagram: null,
                cabelo: null,
                etnia: null,
                seios: null,
                tipo: null,
                dote: null,
                men: null,
                women: null,
                couple: null,
                //message: null,
                datus: {},
                //active: true,
                old_val: {},

            };
        },
        methods: {
            getData() {
                ax.get("dados/" + this.$route.params.id + "/").then(response => [
                    (this.dados = response.data),

                    this.twitter = this.dados.twitter,
                    this.instagram = this.dados.instagram,
                    this.cabelo = this.dados.cabelo,
                    this.etnia = this.dados.etnia,
                    this.seios = this.dados.seios,
                    this.tipo = this.dados.tipo,
                    this.dote = this.dados.dote,
                    this.men = this.dados.men,
                    this.women = this.dados.women,
                    this.couple = this.dados.couple,

                    /* old val */

                    this.old_val.twitter = this.dados.twitter,
                    this.old_val.instagram = this.dados.instagram,
                    this.old_val.cabelo = this.dados.cabelo,
                    this.old_val.etnia = this.dados.etnia,
                    this.old_val.seios = this.dados.seios,
                    this.old_val.tipo = this.dados.tipo,
                    this.old_val.dote = this.dados.dote,
                    this.old_val.men = this.dados.men,
                    this.old_val.women = this.dados.women,
                    this.old_val.couple = this.dados.couple,

                ]);
            },


            addData() {

                // console.log(jQuery.isEmptyObject(this.datus));  

                if ($.isEmptyObject(this.datus)) {
                    this.$noty.error("Cuidado com as  mudanças, Tente de novo..!");
                } else {

                    //console.log(JSON.stringify(this.datus));

                    ax.put("dados/" + this.$route.params.id + "/", {'datus': JSON.stringify(this.datus)})
                        .then(response => {
                                this.$noty.success(response.data.message)
                                    //console.log(response.data)
                                    this.getData()
                            })
                            .catch(error => {
                                this.$noty.error(error.response.data.message)
                            })

                        }



                },
            },
            created() {
                this.getData();
            },
            watch: {
                twitter: function(ero1) {

                    if (this.old_val.twitter != ero1) {
                        this.datus.twitter = ero1; //.replace(/@/, '');
                    } else {
                        delete this.datus.twitter;
                    }
                    //console.log(this.datus);
                },

                instagram: function(ero2) {
                    if (this.old_val.instagram != ero2) {
                        //delete this.datus.instagram;
                        this.datus.instagram = ero2; // .replace(/@/, '');
                    } else {
                        delete this.datus.instagram;
                    }
                    //console.log(this.datus);
                },

                cabelo: function(ero3) {
                    if (this.old_val.cabelo != ero3) {
                        //delete this.datus.cabelo;
                        this.datus.cabelo = ero3;
                    } else {
                        delete this.datus.cabelo;
                    }
                    //console.log(this.datus);
                },

                etnia: function(ero4) {
                    if (this.old_val.etnia != ero4) {
                        //delete this.datus.etnia;
                        this.datus.etnia = ero4;
                    } else {
                        delete this.datus.etnia;
                    }
                    //console.log(this.datus);
                },

                seios: function(ero5) {
                    if (this.old_val.seios != ero5) {
                        //delete this.datus.seios;
                        this.datus.seios = ero5;
                    } else {
                        delete this.datus.seios;
                    }
                    //console.log(this.datus);
                },

                tipo: function(ero6) {

                    if (this.old_val.tipo != ero6) {
                        //delete this.datus.tipo;
                        this.datus.tipo = ero6;
                    } else {
                        delete this.datus.tipo;
                    }
                    //console.log(this.datus);

                },

                dote: function(ero7) {

                    if (this.old_val.dote != ero7) {
                        //delete this.datus.dote;
                        this.datus.dote = ero7;
                    } else {
                        delete this.datus.dote;
                    }
                    //console.log(this.datus);

                },

                men: function(ero8) {

                    if (this.old_val.men != ero8) {
                        //delete this.datus.men;
                        this.datus.men = ero8;
                    } else {
                        delete this.datus.men;
                    }
                    //console.log(this.datus);

                },

                women: function(ero9) {

                    if (this.old_val.women != ero9) {
                        //delete this.datus.women;
                        this.datus.women = ero9;
                    } else {
                        delete this.datus.women;
                    }
                    //console.log(this.datus);

                },

                couple: function(ero10) {

                    if (this.old_val.couple != ero10) {
                        //delete this.datus.couple;
                        this.datus.couple = ero10;
                    } else {
                        delete this.datus.couple;
                    }
                    //console.log(this.datus);

                },

            },
        };
</script>