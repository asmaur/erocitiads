<template>


    <div>

        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2 v-if="especial.perfil">{{especial.perfil.nome}} {{especial.perfil.sobrenome}}</h2>

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
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Especialidades
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">



                                    <form @submit.prevent="addData">

                                        <div class="form-row">


                                            <div class="form-group col-md-12 text-center">
                                                <h5>SERVIÇOS ESPECIAIS</h5>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="beijo_negro" v-model="beijo_negro" style="">
                                                    <label class="custom-control-label" for="beijo_negro">Beijo negro</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="chuva_dourada" name="chuva_dourada" v-model="chuva_dourada" style="">
                                                    <label class="custom-control-label" for="chuva_dourada">Chuva dourada</label>
                                                </div>
                                            </div>

                                           <!-- <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="chuva_negra" style="">
                                                    <label class="custom-control-label" for="chuva_negra">Chuva negra</label>
                                                </div>
                                            </div> -->

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="fetichismo" name="fetichismo" v-model="fetichismo" style="">
                                                    <label class="custom-control-label" for="fetichismo">Fetichismo</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="garganta" name="garganta" v-model="garganta_profunda" style="">
                                                    <label class="custom-control-label" for="garganta">Garganta profunda</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="sado_duro" name="sado_duro" v-model="sado_duro" style="">
                                                    <label class="custom-control-label" for="sado_duro">Sado duro</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="sado_suave" name="sado_suave" v-model="sado_suave" style="">
                                                    <label class="custom-control-label" for="sado_suave">Sado suave</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="squirting" name="squirting" v-model="squirting" style="">
                                                    <label class="custom-control-label" for="squirting">Squirting</label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="strap" name="strap" v-model="strap_on" style="">
                                                    <label class="custom-control-label" for="strap">Strap on</label>
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
        name: "EditarEspecial",
        
        data(){
            return{
                especial: {},
                beijo_negro: null, 
                chuva_dourada: null, 
                fetichismo: null, 
                garganta_profunda: null, 
                sado_duro: null, 
                sado_suave: null, 
                squirting: null, 
                strap_on: null,
                datus: {},
                old_val: {},
            }
        },
        
        methods: {
            getData(){
                ax.get("especiais/" + this.$route.params.id + "/").then(response => [
                    (this.especial = response.data),

                    this.beijo_negro = this.especial.beijo_negro,
                    this.chuva_dourada = this.especial.chuva_dourada,
                    this.fetichismo = this.especial.fetichismo,
                    this.garganta_profunda = this.especial.garganta_profunda,
                    this.sado_duro = this.especial.sado_duro,
                    this.sado_suave = this.especial.sado_suave,
                    this.squirting = this.especial.squirting,
                    this.strap_on = this.especial.strap_on,
                    
                    /* this old val */
                    
                    this.old_val.beijo_negro = this.beijo_negro,
                    this.old_val.chuva_dourada = this.chuva_dourada,
                    this.old_val.fetichismo = this.fetichismo,
                    this.old_val.garganta_profunda = this.garganta_profunda,
                    this.old_val.sado_duro = this.sado_duro,
                    this.old_val.sado_suave = this.sado_suave,
                    this.old_val.squirting = this.squirting,
                    this.old_val.strap_on = this.strap_on,
                   
                ]);
            },
            addData: function(){
                //console.log(this.datus);
                                
                if($.isEmptyObject(this.datus)){
                    this.$noty.warning("Cuidado com as  mudanças, Tente de novo..!");
                }else{
                    
                    //console.log(JSON.stringify(this.datus));
                    
                    ax.put("especiais/" + this.$route.params.id + "/", JSON.stringify(this.datus))
                        .then(response => { 
                            this.$noty.success( response.data.message)                              
                              this.getData()
                        })
                        .catch(error => {
                            this.$noty.error(error.response.data.message)
                        })
                    
                }
                
            },
        
        
        },
        created(){
            this.getData();
        },
        watch: {
            beijo_negro: function(ero1) {
                
                if (this.old_val.beijo_negro != ero1) {                    
                     
                    this.datus.beijo_negro = ero1;
                }else{
                    
                    delete this.datus.beijo_negro;
                } 
                //console.log(this.datus);
            },

            chuva_dourada: function(ero2) {
                if (this.old_val.chuva_dourada != ero2) {
                    
                    this.datus.chuva_dourada = ero2;
                }else{
                    delete this.datus.chuva_dourada;
                } 
                //console.log(this.datus);
            },

            fetichismo: function(ero3) {
                if (this.old_val.fetichismo != ero3) {
                    
                    this.datus.fetichismo = ero3;
                }else{
                    delete this.datus.chuva_dourada;
                }  
                //console.log(this.datus);
            },

            garganta_profunda: function(ero4) {
                if (this.old_val.garganta_profunda != ero4) {
                    
                    this.datus.garganta_profunda = ero4;
                } else{
                    delete this.datus.garganta_profunda;
                }
                //console.log(this.datus);
            },

            sado_duro: function(ero5) {
                if (this.old_val.sado_duro != ero5) {
                    
                    this.datus.sado_duro = ero5;
                }else{
                    delete this.datus.sado_duro;
                } 
                //console.log(this.datus);
            },

            sado_suave: function(ero6) {

                if (this.old_val.sado_suave != ero6) {
                    
                    this.datus.sado_suave = ero6;
                }else{
                    delete this.datus.sado_suave;
                } 
                //console.log(this.datus);

            },

            squirting: function(ero7) {

                if (this.old_val.squirting != ero7) {
                    
                    this.datus.squirting = ero7;
                }else{
                    delete this.datus.squirting;
                }
                //console.log(this.datus);

            },

            strap_on: function(ero8) {

                if (this.old_val.strap_on != ero8) {
                    
                    this.datus.strap_on = ero8;
                }else{
                    delete this.datus.strap_on;
                } 
                //console.log(this.datus);

            }, 

         
            
        }, 
    }
</script>