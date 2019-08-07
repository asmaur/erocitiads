<template>
    <div class="card">
        <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                <button class="btn btn-link btn-block" type="button" data-toggle="collapse" data-target="#collapseD" aria-expanded="true" aria-controls="collapseD" style="color:#000; font-weight: 600; font-size: 1.2rem;">Detalhes do anúncio</button>
            </h5>
        </div>

        <div id="collapseD" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div class="card-body">
                <form class="text-left">
                    <fieldset disabled>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="twitter">Conta twitter</label>
                                <input type="url" class="form-control" id="twitter" v-model="dado.twitter" name="twitter" placeholder="Sua conta twitter">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="instagram">Conta instagram</label>
                                <input type="url" class="form-control" id="instagram" v-model="dado.instagram" placeholder="Sua conta instagram">
                            </div>
                        </div>

                        <hr>

                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <h5>DETALHES</h5>
                            </div>

                            <div class="form-group col-md-3" style="text-transform: capitalize;">
                                <label for="cabelo">Cabelos</label>
                                <select class="form-control" id="cabelo" name="cabelo">
                                    <option value="Loira">{{dado.cabelo}}</option>
                                </select>
                            </div>

                            <div class="form-group col-md-3">
                                <label for="etnia">Etnia</label>
                                <select class="form-control" id="etnia" name="etnia" style="text-transform: capitalize;">
                                    <option value="Branca">{{dado.etnia}}</option>
                                </select>
                            </div>

                            <div class="form-group col-md-3" style="text-transform: capitalize;">
                                <label for="seios">Seios</label>
                                <select class="form-control" id="seios" name="seios" style="text-transform: capitalize;">
                                    <option>{{dado.seios}}</option>
                                </select>
                            </div>

                            <div class="form-group col-md-3">
                                <label for="seios">Tipo Físico</label>
                                <select class="form-control" id="seios" name="seios" style="text-transform: capitalize;">
                                    <option >{{dado.tipo}}</option>
                                </select>
                            </div>
                            <div class="form-group col-md-3" v-if="dado.dote">
                                <label for="dote">Dote</label>
                                <input type="number" class="form-control" id="dote" name="dote" :value="dado.dote" placeholder>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <h5>ATENDIMENTO</h5>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="homen" name="homen" v-model="dado.men" style>
                                    <label class="custom-control-label" for="homen">Homens</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="mulher" v-model="dado.women" name="mulher" style>
                                    <label class="custom-control-label" for="mulher">Mulheres</label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="casais" v-model="dado.couple" name="casais" style>
                                    <label class="custom-control-label" for="casais">Casais</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div class="modal-footer" style="display: flex; justify-content: space-between;">
                    <router-link :to="'/e/d/'+slug+'/'+dado.id+'/'" class="btn btn-primary entrar">Editar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueDados",
        props: {
            dado: {},
            slug: String,
        }
    };
</script>