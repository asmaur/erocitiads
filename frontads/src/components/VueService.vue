<template>

    <div class="card">
        <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Services</button>
            </h5>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">

                <form class="text-left">
                    <fieldset disabled>

                        <div class="form-row">

                            <div class="form-group col-md-12 text-center">
                                <h5>SERVIÇOS</h5>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="beijo_boca" v-model="service.Beijo_boca" name="beijo_boca" style="">
                                    <label class="custom-control-label" for="beijo_boca">Beijo na boca</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="duplas" v-model="service.duplas" name="duplas" style="">
                                    <label class="custom-control-label" for="duplas">Duplas</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="ejaculacao" v-model="service.ejacula_corpo" name="ejaculacao" style="">
                                    <label class="custom-control-label" for="ejaculacao">Ejaculação corpo</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="fantasias" v-model="service.fan_disfaces" name="fantasias" style="">
                                    <label class="custom-control-label" for="fantasias">Fantasias e disfarces</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" v-model="service.massagem_erotica" id="massagem" name="massagem" style="">
                                    <label class="custom-control-label" for="massagem">Massagem erótica</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="namoradinha" v-model="service.namoradinha" name="namoradinha" style="">
                                    <label class="custom-control-label" for="namoradinha">Namoradinha</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="pse" v-model="service.pse" name="pse" style="">
                                    <label class="custom-control-label" for="pse">PSE</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="anal" v-model="service.sexo_anal" name="anal" style="">
                                    <label class="custom-control-label" for="anal">Sexo Anal</label>
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" v-model="service.sexo_oral_sem_cam" id="oral_sem" style="">
                                    <label class="custom-control-label" for="oral_sem">Sexo Oral (sem camisinha)</label>
                                </div>
                            </div>
                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" v-model="service.sexo_oral_com_cam" id="oral_com" name="oral_com" style="">
                                    <label class="custom-control-label" for="oral_com">Sexo Oral (com camisinha)</label>
                                </div>
                            </div>



                        </div>
                    </fieldset>

                </form>

                <div class="modal-footer" style="display: flex; justify-content: space-between;">
                    <router-link :to="'/e/s/'+slug+'/'+service.id+'/'" class="btn btn-primary entrar">
                        Editar</router-link>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: "VueService",
        props: {
            service: {},
            slug: String,
        },
    }
</script>