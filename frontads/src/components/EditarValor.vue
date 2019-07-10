<template>


    <div>


        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2  v-if="caches.perfil">{{caches.perfil.nome}} {{caches.perfil.sobrenome}}</h2>

                    </div>

                </div>
            </div>

        </div>

        <div id="dash">


            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">


                        <!-- profile -->

                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Valores
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div class="card-body">


                                    <form @submit.prevent="addData">

                                        <div class="form-row">

                                            <div class="form-group col-md-12 text-center">
                                                <h5>Cachês</h5>
                                            </div>


                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_1h">1h</label>
                                                <input type="number" class="form-control" id="caches_1h" name="caches_1h" min="50.00" step="10.00" v-model="caches_1h" placeholder="000,00">
                                            </div>

                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_2h">2hs</label>
                                                <input type="number" class="form-control" id="caches_2h" name="caches_2h" min="50.00" step="10.00" v-model="caches_2h" placeholder="000,00">
                                            </div>
                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_3h">3hs</label>
                                                <input type="number" class="form-control" id="caches_3h" name="caches_3h" min="50.00" step="10.00" v-model="caches_3h" placeholder="000,00">
                                            </div>
                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_4h">4hs</label>
                                                <input type="number" class="form-control" id="caches_4h" name="caches_4h" min="50.00" step="10.00" v-model="caches_4h" placeholder="000,00">
                                            </div>

                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_pernoite_dia_util">Pernoite (dia útil)</label>
                                                <input type="number" class="form-control" id="caches_pernoite_dia_util" name="caches_pernoite_dia_util" min="50.00" step="10.00" v-model="caches_pernoite_dia_util" placeholder="000,00">
                                            </div>

                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_sexta_noite">Sexta (noite)</label>
                                                <input type="number" class="form-control" id="caches_sexta_noite" name="caches_sexta_noite" min="50.00" step="10.00" v-model="caches_sexta_noite" placeholder="000,00">
                                            </div>
                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_fim_semana_dia">Final de Semana (dia)</label>
                                                <input type="number" class="form-control" id="caches_fim_semana_dia" name="caches_fim_semana_dia" min="50.00" step="10.00" v-model="caches_fim_semana_dia" placeholder="000,00">
                                            </div>
                                            <div class="form-group col-md-3 text-left">
                                                <label for="caches_sabado_noite">Sabádo (noite)</label>
                                                <input type="number" class="form-control" id="caches_sabado_noite" name="caches_sabado_noite" min="50.00" step="10.00" v-model="caches_sabado_noite" placeholder="000,00">
                                            </div>



                                        </div>

                                        <div class="modal-footer" style="display: flex; justify-content: space-between;">
                                            <!--<button type="reset" class="btn btn-secondary fechar" data-dismiss="modal">Resetar</button>-->
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
        name: "EditarValor", 

        data() {
            return {
                caches_1h: null,
                caches_2h: null,
                caches_3h: null,
                caches_4h: null,
                caches_pernoite_dia_util: null,
                caches_sexta_noite: null,
                caches_fim_semana_dia: null,
                caches_sabado_noite: null,
                datus: {},
                caches: {},
                old_val: {},
            }
        },
        methods:{
            getData(){
                ax.get("cash/" + this.$route.params.id + "/").then(response => [
                    (this.caches = response.data),

                    this.caches_1h = this.caches.caches_1h,
                    this.caches_2h = this.caches.caches_2h,
                    this.caches_3h = this.caches.caches_3h,
                    this.caches_4h = this.caches.caches_4h,
                    this.caches_pernoite_dia_util = this.caches.caches_pernoite_dia_util,
                    this.caches_sexta_noite = this.caches.caches_sexta_noite,
                    this.caches_fim_semana_dia = this.caches.caches_fim_semana_dia,
                    this.caches_sabado_noite = this.caches.caches_sabado_noite,
                    
                    
                    /* old val */
                    
                    this.old_val.caches_1h = this.caches.caches_1h,
                    this.old_val.caches_2h = this.caches.caches_2h,
                    this.old_val.caches_3h = this.caches.caches_3h,
                    this.old_val.caches_4h = this.caches.caches_4h,
                    this.old_val.caches_pernoite_dia_util = this.caches.caches_pernoite_dia_util,
                    this.old_val.caches_sexta_noite = this.caches.caches_sexta_noite,
                    this.old_val.caches_fim_semana_dia = this.caches.caches_fim_semana_dia,
                    this.old_val.caches_sabado_noite = this.caches.caches_sabado_noite,
                    
                    

                ]);
                
            },
            
            addData: function(){
                //console.log(this.datus);
                
                if($.isEmptyObject(this.datus)){
                    this.$noty.error("Cuidado com as  mudanças, Tente de novo..!");
                }else{
                    
                    //console.log(JSON.stringify(this.datus));
                    
                    ax.put("cash/" + this.$route.params.id + "/", JSON.stringify(this.datus))
                        .then(response => { this.$noty.success( response.data.message) },
                              this.getData(),     
                        )
                        .catch(error => {
                            this.$noty.error(error.response.data.message)
                        })
                    
                }
                
            },
        },
        
        created (){
            this.getData();
            
            
        },
        watch: {
            caches_1h: function(ero1){
                
                if (this.old_val.caches_1h != ero1){                    
                    this.datus.caches_1h = ero1;
                }else{                    
                    delete this.datus.caches_1h; 
                } 
                //console.log(this.datus);
            },

            caches_2h: function(ero2){
                if (this.old_val.caches_2h != ero2){
                        this.datus.caches_2h = ero2;
                    
                }else{
                    delete this.datus.caches_2h;
                } 
                //console.log(this.datus);
            },

            caches_3h: function(ero3){
                if (this.old_val.caches_3h != ero3){
                    
                    this.datus.caches_3h = ero3;
                    
                }else{
                    delete this.datus.caches_3h;
                }  
                //console.log(this.datus);
            },

            caches_4h: function(ero4){
                if (this.old_val.caches_4h != ero4){
                    
                        this.datus.caches_4h = ero4;
                    
                }else{
                    delete this.datus.caches_4h;
                }
                //console.log(this.datus);
            },
            caches_pernoite_dia_util: function(ero5){
                
                if (this.old_val.caches_pernoite_dia_util != ero5){                    
                    
                    this.datus.caches_pernoite_dia_util = ero5;
                    
                }else{
                    
                    delete this.datus.caches_pernoite_dia_util;
                } 
                //console.log(this.datus);
            },

            caches_sexta_noite: function(ero6){
                if (this.old_val.caches_sexta_noite != ero6){
                    
                        this.datus.caches_sexta_noite = ero6;
                    
                }else{
                    delete this.datus.caches_sexta_noite;
                } 
                //console.log(this.datus);
            },

            caches_fim_semana_dia: function(ero7){
                if (this.old_val.caches_fim_semana_dia != ero7){
                    
                     this.datus.caches_fim_semana_dia = ero7;
                    
                }else{
                    delete this.datus.caches_fim_semana_dia;
                }  
                //console.log(this.datus);
            },

            caches_sabado_noite: function(ero8){
                if (this.old_val.caches_sabado_noite != ero8){
                    
                    this.datus.caches_sabado_noite = ero8;
                    
                }else{
                    delete this.datus.caches_sabado_noite;
                }
                //console.log(this.datus);
            },
        },
        
    }
</script>