<template>


    <div>


        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2  v-if="locais.perfil">{{locais.perfil.nome}} {{locais.perfil.sobrenome}}</h2>

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
                            <div class="card-header" id="headingFour">
                                <h5 class="mb-0">
                                    <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Locais
                                    </button>
                                </h5>
                            </div>
                            <div id="collapseFour" aria-labelledby="collapseFour" data-parent="#accordionExample">
                                <div class="card-body">


                                    <form @submit.prevent="addData">

                                        <div class="form-row">

                                            <div class="form-group col-md-12 text-center">
                                                <h5>Locais de atendimento</h5>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="hotel" name="hotel" v-model="hotel" style="">
                                                    <label class="custom-control-label" for="hotel">Hoteis</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="motel" name="motel" v-model="motel" style="">
                                                    <label class="custom-control-label" for="motel">Moteis</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="local_proprio" name="local_proprio" v-model="local_proprio" style="">
                                                    <label class="custom-control-label" for="local_proprio">Local Próprio</label>
                                                </div>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="sobre_convite" name="sobre_convite" v-model="sobre_convite" style="">
                                                    <label class="custom-control-label" for="sobre_convite">Sobre convite (ir até o cliente)</label>
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
        name: "EditarLocais",
        data() {
            return {
                hotel: null,
                motel: null,
                local_proprio: null,
                sobre_convite: null,
                locais: {},
                datus: {},
                old_val: {},
            }
        },
        methods:{
            getData(){
                ax.get("local/" + this.$route.params.id + "/").then(response => [
                    (this.locais = response.data),

                    this.hotel = this.locais.hotel,
                    this.motel = this.locais.motel,
                    this.local_proprio = this.locais.local_proprio,
                    this.sobre_convite = this.locais.sobre_convite,
                    
                    
                    /* old val */
                    
                    this.old_val.hotel = this.locais.hotel,
                    this.old_val.motel = this.locais.motel,
                    this.old_val.local_proprio = this.locais.local_proprio,
                    this.old_val.sobre_convite = this.locais.sobre_convite,
                    
                    

                ]);
                
            },
            
            addData: function(){
                console.log(this.datus);
                
                if($.isEmptyObject(this.datus)){
                    this.$noty.error("Cuidado com as  mudanças, Tente de novo..!");
                }else{
                    
                    //console.log(JSON.stringify(this.datus));
                    
                    ax.put("local/" + this.$route.params.id + "/", JSON.stringify(this.datus))
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
            hotel: function(ero1) {
                
                if (this.old_val.hotel != ero1) {                    
                     
                    this.datus.hotel = ero1;
                }else{
                    
                    delete this.datus.hotel;
                } 
                //console.log(this.datus);
            },

            motel: function(ero2) {
                if (this.old_val.motel != ero2) {
                    
                    this.datus.motel = ero2;
                }else{
                    delete this.datus.motel;
                } 
                //console.log(this.datus);
            },

            local_proprio: function(ero3) {
                if (this.old_val.local_proprio != ero3) {
                    
                    this.datus.local_proprio = ero3;
                }else{
                    delete this.datus.local_proprio;
                }  
                //console.log(this.datus);
            },

            sobre_convite: function(ero4) {
                if (this.old_val.sobre_convite != ero4) {
                    
                    this.datus.sobre_convite = ero4;
                } else{
                    delete this.datus.sobre_convite;
                }
                //console.log(this.datus);
            },
        },
    }
</script>