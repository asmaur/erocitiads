<template>

    <div>

        <div class="card">
            <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="color:#000; font-weight: 600; font-size: 1.2rem;">Dados do anúncio</button>
                </h5>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">

                    <form class="text-left">
                        <fieldset disabled>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="cidade">Categoria</label>
                                    <select class="form-control" id="categoria" name="categoria" style="text-transform: uppercase;">
                                        <option>{{per.category}}</option>

                                    </select>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="nome" class="col-form-label">Nome do anúncio</label>
                                    <input type="text" class="form-control" id="nome" name="nome" :value="per.nome" placeholder="Entre um nome">
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="sobrenome" class="col-form-label">Sobrenome do anúncio</label>
                                    <input type="text" class="form-control" id="sobrenome" name="sobrenome" :value="per.sobrenome" placeholder="Entre um sobrenome">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="pais">Idade</label>
                                    <input type="number" min="18" class="form-control" id="idade" name="idade" :value="per.idade" placeholder="Entre sua idade">
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="pais">Altura(m)</label>
                                    <input type="number" min="1.50" step="0.01" class="form-control" id="altura" name="altura" :value="per.altura" placeholder="Entre sua altura">
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="pais">Peso (Kg)</label>
                                    <input type="number" min="50" step="1" class="form-control" id="peso" name="peso" :value="per.peso" placeholder="Entre seu peso">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6" v-if="per.city">
                                    <input type="text" hidden value="rs" name="code">
                                    <label for="Estado">Estado</label>
                                    <input class="form-control" type="text" :value="per.city.name">
                                    <!-- <select class="form-control" id="estado" name="estado">
                            <option>{{per.city.name}}</option>
                            
                          </select> -->
                                </div>

                                <div class="form-group col-md-6" v-if="per.city">
                                    <label for="cidade">Cidade</label>
                                    <input class="form-control" type="text" :value="per.city.state.name">
                                    <!-- <select class="form-control" id="cidade" name="cidade">
                            <option ></option>
                          </select> -->
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="telefone">Telefone</label>
                                    <input type="telefone" class="form-control" id="telefone" :value="per.phone" placeholder="(DDD) 999-999-999">
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="description">Descrição</label>
                                    <textarea name="description" id="description" class="form-control" :value="per.description" cols="20" rows="5" maxlength="500" placeholder="Descrição com no máximo 300 palavras"></textarea>
                                </div>
                            </div>

                            <hr>
                            <div class="form-row">
                              <!--  <div class="form-group col-md-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="mulher" v-model="per.is_active" name="mulher" style>
                                        <label class="custom-control-label" for="mulher">Ativo</label>
                                    </div>
                                </div> -->

                               <!-- <div class="form-group col-md-4">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="trab" v-model="per.is_working" name="trab" style>
                                        <label class="custom-control-label" for="trab">Perfil Trabalhando</label>
                                    </div>
                                </div> -->



                            </div>

                            <hr>

                            <div class="form-row">
                                <div class="col-md-2">

                                    <img :src="img_url+per.capa" class="img-fluid" alt="">

                                    <span class="btn btn-success fileinput-button">

                                        Foto de capa do anúncio
                                    </span>
                                </div>
                            </div>
                        </fieldset>

                        <div class="modal-footer" style="display: flex; justify-content: space-between;">
                            <router-link :to="'/e/p/'+slug+'/'+per.pk+'/'" class="btn btn-primary entrar">Editar</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <!-- end profile --->



</template>

<script>
    export default {
        name: "VuePerfil",
        data(){
            return{
                img_url: 'https://api.erociti.com',
            }
        },
        props: {
            per: {},
            slug: String,
        },


    };
</script>