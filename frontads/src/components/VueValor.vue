<template>
    <div class="card">
        <div class="card-header" id="headingThree">
            <h5 class="mb-0">
                <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="color:#000; font-weight: 600; font-size: 1.2rem;">Valores do anúncio</button>
            </h5>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div class="card-body">
                <form>
                    <fieldset disabled>
                        <div class="form-row">
                            <div class="form-group col-md-12 text-center">
                                <h5>Cachês</h5>
                            </div>
                            <div class="form-group col-md-3 text-left">
                                <label for="30min">30min</label>
                                <input type="number" class="form-control" id="30min" name="30min" min="50.00" step="10.00" v-model="valor.caches_30min" placeholder="000,00">
                            </div>

                            <div class="form-group col-md-3 text-left">
                                <label for="1h">1h</label>
                                <input type="number" class="form-control" id="1h" name="1h" min="50.00" step="10.00" v-model="valor.caches_1h" placeholder="000,00">
                            </div>

                            <div class="form-group col-md-3 text-left">
                                <label for="2h">2hs</label>
                                <input type="number" class="form-control" id="2h" name="2h" min="50.00" step="10.00" v-model="valor.caches_2h" placeholder="000,00">
                            </div>
                            <div class="form-group col-md-3 text-left">
                                <label for="3h">3hs</label>
                                <input type="number" class="form-control" id="3h" name="3h" min="50.00" step="10.00" v-model="valor.caches_3h" placeholder="000,00">
                            </div>
                            <div class="form-group col-md-3 text-left">
                                <label for="4h">4hs</label>
                                <input type="number" class="form-control" id="4h" name="4h" min="50.00" step="10.00" v-model="valor.caches_4h" placeholder="000,00">
                            </div>

                            <div class="form-group col-md-3 text-left">
                                <label for="pernoite_util">Pernoite (dia útil)</label>
                                <input type="number" class="form-control" id="pernoite_util" name="pernoite_util" v-model="valor.caches_pernoite_dia_util" min="50.00" step="10.00" placeholder="000,00">
                            </div>

                            <div class="form-group col-md-3 text-left">
                                <label for="sexta_noite">Sexta (noite)</label>
                                <input type="number" class="form-control" id="sexta_noite" name="sexta_noite" v-model="valor.caches_sexta_noite" min="50.00" step="10.00" placeholder="000,00">
                            </div>
                            <div class="form-group col-md-3 text-left">
                                <label for="fim_de_semana">Final de Semana (dia)</label>
                                <input type="number" class="form-control" id="fim_de_semana" name="fim_de_semana" v-model="valor.caches_fim_semana_dia" min="50.00" step="10.00" placeholder="000,00">
                            </div>
                            <div class="form-group col-md-3 text-left">
                                <label for="sabado_noite">Sabádo (noite)</label>
                                <input type="number" class="form-control" id="sabado_noite" name="sabado_noite" min="50.00" step="10.00" v-model="valor.caches_sabado_noite" placeholder="000,00">
                            </div>
                        </div>
                    </fieldset>
                </form>

                <div class="modal-footer" style="display: flex; justify-content: space-between;">
                    <router-link :to="'/e/v/'+slug+'/'+valor.id+'/'" class="btn btn-primary entrar">Editar</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VueValor",
        props: {
            valor: {},
            slug: String,
        }
    };
</script>