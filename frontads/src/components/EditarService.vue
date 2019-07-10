<template>


    <div>


        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2 v-if="service.perfil">{{service.perfil.nome}} {{service.perfil.sobrenome}}</h2>

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
                                                <h5>SERVIÇOS</h5>
                                            </div>
                                            

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="beijo_boca" name="beijo_boca" v-model="beijo_na_boca" style="">
                                                    <label class="custom-control-label" for="beijo_boca">Beijo na boca</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="duplas" name="duplas" v-model="duplas" style="">
                                                    <label class="custom-control-label" for="duplas">Duplas</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="ejaculacao" name="ejaculacao" v-model="ejacula_corpo" style="">
                                                    <label class="custom-control-label" for="ejaculacao">Ejaculação corpo</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="fantasias" name="fantasias" v-model="fan_disfarces" style="">
                                                    <label class="custom-control-label" for="fantasias">Fantasias e disfarces</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="massagem" name="massagem" v-model="massagem_erotica" style="">
                                                    <label class="custom-control-label" for="massagem">Massagem erótica</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="namoradinha" name="namoradinha" v-model="namoradinha" style="">
                                                    <label class="custom-control-label" for="namoradinha">Namoradinha</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="pse" name="pse" v-model="pse" style="">
                                                    <label class="custom-control-label" for="pse">PSE</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="anal" name="anal" v-model="sexo_anal" style="">
                                                    <label class="custom-control-label" for="anal">Sexo Anal</label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="oral_sem" v-model="sexo_oral_sem_cam" style="">
                                                    <label class="custom-control-label" for="oral_sem">Sexo Oral (sem camisinha)</label>
                                                </div>
                                            </div>
                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="oral_com" name="oral_com" v-model="sexo_oral_com_cam" style="">
                                                    <label class="custom-control-label" for="oral_com">Sexo Oral (com camisinha)</label>
                                                </div>
                                            </div>





                                        </div>

                                        <div class="modal-footer" style="display: flex; justify-content: space-between;">
                                          <!--  <button type="reset" class="btn btn-secondary fechar" data-dismiss="modal">Resetar</button> -->
                                            <button type="submit" class="btn btn-primary entrar" >Salvar</button>
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
        name: "EditarService",
        
        data(){
            return{
                service: {},
                datus:{},
                beijo_na_boca: null, 
                duplas: null, 
                ejacula_corpo: null, 
                fan_disfarces: null, 
                massagem_erotica: null, 
                namoradinha: null, 
                pse: null, 
                sexo_anal: null, 
                sexo_oral_com_cam: null, 
                sexo_oral_sem_cam: null,
                old_val: {}
            }
        },
       
        methods: {
            getData(){
                /* get data from server and pass to models */
                ax.get("services/" + this.$route.params.id + "/").then(response => [
                    (this.service = response.data),

                    this.beijo_na_boca = this.service.beijo_na_boca,
                    this.duplas = this.service.duplas,
                    this.ejacula_corpo = this.service.ejacula_corpo,
                    this.fan_disfarces = this.service.fan_disfarces,
                    this.massagem_erotica = this.service.massagem_erotica,
                    this.namoradinha = this.service.namoradinha,
                    this.pse = this.service.pse,
                    this.sexo_anal = this.service.sexo_anal,
                    this.sexo_oral_com_cam = this.service.sexo_oral_com_cam,
                    this.sexo_oral_sem_cam = this.service.sexo_oral_sem_cam,
                    
                    /* setting old val */
                    
                    this.old_val.beijo_na_boca = this.service.beijo_na_boca,
                    this.old_val.duplas = this.service.duplas,
                    this.old_val.ejacula_corpo = this.service.ejacula_corpo,
                    this.old_val.fan_disfarces = this.service.fan_disfarces,
                    this.old_val.massagem_erotica = this.service.massagem_erotica,
                    this.old_val.namoradinha = this.service.namoradinha,
                    this.old_val.pse = this.service.pse,
                    this.old_val.sexo_anal = this.service.sexo_anal,
                    this.old_val.sexo_oral_com_cam = this.service.sexo_oral_com_cam,
                    this.old_val.sexo_oral_sem_cam = this.service.sexo_oral_sem_cam, 
                    
                    

                ]);
                
            },
            
            addData: function(){
                /* verificar se os dados estão vazios, senão envia pra modificar */
                
                if($.isEmptyObject(this.datus)){
                    this.$noty.error("Cuidado com as  mudanças, Tente de novo..!");
                }else{
                    
                    //console.log(JSON.stringify(this.datus));
                    
                    ax.put("services/" + this.$route.params.id + "/", JSON.stringify(this.datus))
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
            /* observar e formar os dado a ser modificados */
            beijo_na_boca: function(ero1) {
                
                if (this.old_val.beijo_na_boca != ero1) {
                    
                    this.datus.beijo_na_boca = ero1;
                } else{
                    delete this.datus.beijo_na_boca;
                }
                //console.log(this.datus);
            },

            duplas: function(ero2) {
                if (this.old_val.duplas != ero2) {
                    
                    this.datus.duplas = ero2;
                } else{
                    delete this.datus.duplas;
                }
                //console.log(this.datus);
            },

            ejacula_corpo: function(ero3) {
                if (this.old_val.ejacula_corpo !=ero3) {
                    
                    this.datus.ejacula_corpo = ero3;
                } else{
                    delete this.datus.ejacula_corpo;
                }
                //console.log(this.datus);
            },

            fan_disfarces: function(ero4) {
                if (this.old_val.fan_disfarces != ero4) {
                    
                    this.datus.fan_disfarces = ero4;
                } else{
                    delete this.datus.fan_disfarces;
                }
                //console.log(this.datus);
            },

            massagem_erotica: function(ero5) {
                if (this.old_val.massagem_erotica != ero5) {
                    
                    this.datus.massagem_erotica = ero5;
                } else{
                    delete this.datus.massagem_erotica;
                }
                //console.log(this.datus);
            },

            namoradinha: function(ero6) {

                if (this.old_val.namoradinha != ero6) {
                    
                    this.datus.namoradinha = ero6;
                } else{
                    delete this.datus.namoradinha;
                }
                //console.log(this.datus);

            },

            pse: function(ero7){

                if (this.old_val.pse != ero7){
                    
                    this.datus.pse = ero7;
                }else{
                    delete this.datus.pse;
                }
                

            },

            sexo_anal: function(ero8) {

                if (this.old_val.sexo_anal != ero8) {
                    
                    this.datus.sexo_anal = ero8;
                } else{
                    delete this.datus.sexo_anal;
                }
                

            },

            sexo_oral_com_cam: function(ero9) {

                if (this.old_val.sexo_oral_com_cam != ero9) {
                    
                    this.datus.sexo_oral_com_cam = ero9;
                } else{
                    delete this.datus.sexo_oral_com_cam;
                }
               

            },

            sexo_oral_sem_cam: function(ero10) {

                if (this.old_val.sexo_oral_sem_cam != ero10) {
                    
                    this.datus.sexo_oral_sem_cam = ero10;
                } else{
                    delete this.datus.sexo_oral_sem_cam;
                }
                

            },
            
            
        },
        
    }
</script>




