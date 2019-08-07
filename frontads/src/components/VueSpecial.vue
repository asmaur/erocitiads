<template>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
                <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseE" aria-expanded="false" aria-controls="collapseE" style="color:#000; font-weight: 600; font-size: 1.2rem;">Especialidades</button>
            </h5>
        </div>
        <div id="collapseE" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div class="card-body">
                <form>
                    <fieldset disabled>
                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <h5>SERVIÇOS ESPECIAIS</h5>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" v-model="especiais.beijo_negro" id="beijo_negro" style>
                                    <label class="custom-control-label" for="beijo_negro">Beijo negro</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="chuva_dourada" v-model="especiais.chuva_dourada" name="chuva_dourada" style>
                                    <label class="custom-control-label" for="chuva_dourada">Chuva dourada</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="chuva_negra" v-model="especiais.chuva_negra" style>
                                    <label class="custom-control-label" for="chuva_negra">Chuva negra</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="fetichismo" v-model="especiais.fetichismo" name="fetichismo" style>
                                    <label class="custom-control-label" for="fetichismo">Fetichismo</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="garganta" v-model="especiais.garganta_profunda" name="garganta" style>
                                    <label class="custom-control-label" for="garganta">Garganta profunda</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="sado_duro" v-model="especiais.sado_duro" name="sado_duro" style>
                                    <label class="custom-control-label" for="sado_duro">Sado duro</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="sado_suave" name="sado_suave" v-model="especiais.sado_suave" style>
                                    <label class="custom-control-label" for="sado_suave">Sado suave</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="squirting" name="squirting" v-model="especiais.squirting" style>
                                    <label class="custom-control-label" for="squirting">Squirting</label>
                                </div>
                            </div>
                            <div class="form-group col-md-4 text-left">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="strap" name="strap" v-model="especiais.strap_on" style>
                                    <label class="custom-control-label" for="strap">Strap on</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div class="modal-footer" style="display: flex; justify-content: space-between;">
                    <router-link :to="'/e/es/'+slug+'/'+especiais.id+'/'" class="btn btn-primary entrar">Editar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueSpecial",
        props: {
            especiais: {},
            slug: String,
        }
    };
</script>