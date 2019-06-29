<template>
    <div class="card">
        <div class="card-header" id="headingFour">
            <h5 class="mb-0">
                <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Locais</button>
            </h5>
        </div>
        <div id="collapseFour" class="collapse" aria-labelledby="collapseFour" data-parent="#accordionExample">
            <div class="card-body">
                <form action >
                    <fieldset>
                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <h5>Locais de atendimento</h5>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="hoteis" v-model="locais.hotel" name="hotel" style disabled>
                                    <label class="custom-control-label" for="hoteis">Hoteis</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="moteis" name="moteis" v-model="locais.motel" style disabled>
                                    <label class="custom-control-label" for="moteis">Moteis</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="proprio" name="proprio" v-model="locais.local_proprio" style disabled>
                                    <label class="custom-control-label" for="proprio">Local Próprio</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="convite" name="convite" v-model="locais.sobre_convite" style disabled>
                                    <label class="custom-control-label" for="convite">Sobre convite</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
                

                <div class="modal-footer" style="display: flex; justify-content: space-between;">
                    <router-link :to="'/e/l/'+slug+'/'+locais.id+'/'" class="btn btn-primary entrar">Editar</router-link>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    
    
    
    export default {
        name: "VueLocais",
        
        props:{
            locais: {},
            slug: String,
        },
    };
</script>