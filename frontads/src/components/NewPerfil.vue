<template>
    <!-- modal New perfil -->

    <div class="modal fade" id="criar-perfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> CRIAR ANÚNCIO   <!-- CRIAR PERFIL --> </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <form id="perfilForm" class="text-left" @submit.prevent="create()">
                    <fieldset>
                        <div class="modal-body">

                            <div class="form-row">

                                <div class="form-group col-md-12">
                                    <label for="category">Categoria</label>
                                    <select class="form-control" id="category" name="category" v-model="category" required>
                                        <option value="">Escolha sua categoria</option>
                                        <option value="mulheres"> Mulher</option>
                                        <option value="homens">Homem</option>
                                        <option value="transex">Transex</option>

                                    </select>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="nome" class="col-form-label">Nome no anúncio</label>
                                    <input type="text" class="form-control" id="nome" name="nome" v-model="nome" maxlength="12" placeholder="Entre o nome do perfil" required>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="sobrenome" class="col-form-label">Sobrenome no anúncio</label>
                                    <input type="text" class="form-control" id="sobrenome" name="sobrenome" v-model="sobrenome" maxlength="12" placeholder="Entre o sobrenome do perfil" required>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="idade" class="col-form-label">Idade(anos)</label>
                                    <input type="number" min="18" max="50" step="1" class="form-control" v-validate="'digits:2|required|between:18,50'" id="idade" name="idade" v-model="idade" placeholder="Entre sua idade" required>
                                    <span class="alert-danger" v-if="errors.has('idade')">{{ errors.first('idade') }}</span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="altura" class="col-form-label">Altura(m)</label>
                                    <input type="number" min="1.3" step="0.01" max="2.0" class="form-control" v-validate="'required|between:1.3,2.0'" id="altura" name="altura" v-model="altura" placeholder="Entre sua altura" required>
                                    <span class="alert-danger" v-if="errors.has('altura')">{{ errors.first('altura') }}</span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="peso" class="col-form-label">Peso(kg)</label>
                                    <input type="number" min="30" max="80" step="1" class="form-control" v-validate="'digits:2|required|between:30,80'" id="peso" name="peso" v-model="peso" placeholder="Entre seu peso" required>
                                    <span class="alert-danger" v-if="errors.has('peso')">{{ errors.first('peso') }}</span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="tipo">Tipo Físico</label>
                                    <select class="form-control" id="tipo" name="tipo" v-model="tipo" required>
                                        <option value="Magra">Magra</option>
                                        <option value="Mignon">Mignon</option>
                                        <option value="Alta">Alta</option>
                                        <option value="BBW">BBW</option>
                                        <option value="Fitness">Fitness</option>



                                    </select>
                                </div>


                            </div>
                            <div class="form-row">


                                <div class="form-group col-md-6">
                                    <label for="Estado">Estado</label>
                                    <select class="form-control" id="estado" name="estado" v-model="getcity" required>
                                        <option value="">Selecione seu estado</option>
                                        <option v-for="state in states" :value="state" :key="state.id">{{state.nome}}</option>

                                    </select>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="cidade">Cidade</label>
                                    <select class="form-control" id="cidade" name="cidade" v-model="cityName" required>
                                        <option>Selecione sua cidade</option>
                                        <option v-for="city in cities" :value="city.nome" :key="city.id">{{city.nome}}</option>

                                    </select>
                                </div>

                            </div>

                            <div class="form-row">

                                <div class="form-group col-md-6">
                                    <label for="telefone">Telefone</label>
                                    <input type="tel" class="form-control" id="telefone" v-model="telefone" v-validate="{required: true}" ref="telefone" minlength="16" min="16" v-mask="'(##) #-####-####'" placeholder="Entre seu telephone" name="telefone" required>
                                    <span class="alert-danger">{{ errors.first('telefone') }}</span>

                                </div>
                                <div class="form-group col-md-6">
                                    <label for="telefone_confirmar">Confirmar telefone</label>
                                    <input type="tel" class="form-control" id="telefone_confirmar" v-model="telefone_confirmar" v-validate="'required|confirmed:telefone'" data-vv-as="telefone" minlength="16" min="16" v-mask="'(##) #-####-####'" placeholder="Entre seu telephone" name="telefone_confirmar" required>
                                    <span class="alert-danger">{{ errors.first('telefone_confirmar') }}</span>

                                </div>

                            </div>

                            <div class="form-row">

                                <div class="form-group col-md-8">
                                    <label style="font-size: 14px;">
                                        <span style='color:navy;font-weight:bold'>Instrução :</span>
                                    </label>
                                    <ul>
                                        <li>
                                            arquivos aceitos (jpg, png, jpeg).
                                        </li>
                                        <li>
                                            Tamanho recomendável de <strong>1600x900px. </strong>
                                        </li>

                                    </ul>

                                    <div class="custom-file col-md-12">
                                        <label class="custom-file-label" for="customFile" v-if="file">{{file.name}}</label>
                                        <label class="custom-file-label" for="customFile" v-else>Escolha a foto de capa (máximo de 3MB)</label>
                                        <input type="file" class="custom-file-input" ref="capa" v-validate="'ext:jpeg,jpg,png|size:3500|required'" data-vv-as="capa" id="capa" name="capa" @change="handleFileChange" required>
                                        <span v-if="file">{{file.name}}</span>
                                        <br>
                                        <span class="alert-danger" v-for="error in errors.collect('capa')" :key="error.index">{{ error }}</span>

                                    </div>

                                </div>

                            </div>


                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Descrição:</label>
                                <textarea class="form-control" id="note" required v-model="description" placeholder="Descrição com no máximo 500 palavras" maxlength="500" onkeyup="$(this).height(15);$(this).height($(this).prop('scrollHeight'))"></textarea>
                                
                                <p> <strong>**Ao criar seu anúncio, entre na aba "planos". <br> Ative seu plano e disponibilize seu anuncio para o Brasil todo. </strong> </p>
                                
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="reset" class="btn btn-secondary mr-auto fechar" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary entrar">CRIAR ANÚNCIO</button>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
    </div>

    <!-- end modal perfil -->


</template>

<script>
    import ax from '../api.js';
    import axios from 'axios'
    import $ from 'jquery'

    export default {
        name: "NewPerfil",
        props: {
            pk: null
        },
        computed: {
            fone: function() {
                var fon = this.telefone_confirmar.replace(/\D/g, '')
                return '55' + fon
            }
        },

        data() {
            return {
                states: {},
                cities: {},
                getcity: null,
                category: null,
                nome: null,
                sobrenome: null,
                idade: null,
                altura: null,
                peso: null,
                telefone: null,
                telefone_confirmar: null,
                description: "",
                stateCode: null,
                stateName: null,
                cityName: null,
                tipo: null,
                file: "",
                datus: {},
                agente: {},
                image: {
                    height: '',
                    width: ''
                },
            };
        },

        methods: {

            getStates() {
                axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
                    .then(response => {
                        this.states = response.data
                    })
            },
            validate_data() {
                if (this.phone != this.confirm_phone) {
                    this.validationErrors.phone = true;
                    return true;
                } else {
                    return false;
                }

            },
            fileSize() {

                //const MAX_SIZE = 100000;
                const MIN_WIDTH = 1600;
                const MIN_HEIGHT = 900;

                let varfile = this.$refs.capa.files[0];

                let reader = new FileReader();

                reader.readAsDataURL(varfile);
                reader.onload = evt => {
                    let img = new Image();
                    img.onload = () => {
                        this.image.width = img.width;
                        this.image.height = img.height;
                        this.imageLoaded = true;
                        //console.log("Alt: "+this.image.height);
                        //console.log("Cump: "+this.image.width);

                        if (this.image.width < MIN_WIDTH) {
                            alert('A sua imagen: ' + this.image.width + 'x' + this.image.height + 'px é menor que o mínimo recomendado de: ' + MIN_WIDTH + 'x' + MIN_HEIGHT + 'px');
                            return;
                        }
                        if (this.image.height < MIN_HEIGHT) {
                            alert('A sua imagen: ' + this.image.width + 'x' + this.image.height + 'px é menor que o mínimo recomendado de: ' + MIN_WIDTH + 'x' + MIN_HEIGHT + 'px');
                            return;
                        }
                    }
                    img.src = evt.target.result;

                }
            },
            handleFileChange(e) {
                // Whenever the file changes, emit the 'input' event with the file data.
                //this.$emit('input', e.target.files[0]);

                this.file = e.target.files[0];

                this.fileSize();

            },

            create() {

                this.$validator.validateAll().then((valid) => {


                    if (valid) {

                        this.datus.pk = this.agente.id
                        this.datus.phone = this.fone
                        var formData = new FormData()
                        formData.append('file', this.file)
                        formData.append('datus', JSON.stringify(this.datus))

                        this.$noty.success("Processando os dados, Aguarde", {
                            timeout: 8000,
                        })

                        $('#criar-perfil').modal('hide')


                        ax.post("pf/", formData)
                            .then(response => {
                                this.$noty.success(response.data.message);
                                setTimeout(() => {
                                    location.reload();
                                }, 2000);
                            })
                            .catch(error => {
                                this.$noty.error(error.response.data.message)
                            })

                    } else {
                        this.$noty.error("O formulário contêm erros, corrija os erros.")

                    }
                })



            },
        },


        created() {
            this.getStates();
            this.agente = JSON.parse(localStorage.getItem("agente"));
        },

        watch: {

            getcity: function(state) {
                //console.log(state.id);
                axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + state.id + "/municipios")
                    .then(response => {
                        this.cities = response.data
                    });
                this.stateCode = state.sigla;
                this.stateName = state.nome;
            },

            category: function(ero1) {
                if (ero1 != "") {
                    this.datus.category = ero1;
                } else {
                    delete this.datus.category;
                }
            },
            nome: function(ero2) {
                if (ero2 != "") {
                    this.datus.nome = ero2;
                } else {
                    delete this.datus.nome;
                }
            },
            sobrenome: function(ero3) {
                if (ero3 != "") {
                    this.datus.sobrenome = ero3;
                } else {
                    delete this.datus.sobrenome;
                }
            },
            idade: function(ero4) {
                if (ero4 != "") {
                    this.datus.idade = ero4;
                } else {
                    delete this.datus.idade;
                }
            },
            altura: function(ero5) {
                if (ero5 != "") {
                    this.datus.altura = ero5;
                } else {
                    delete this.datus.altura;
                }
            },
            peso: function(ero6) {
                if (ero6 != "") {
                    this.datus.peso = ero6;
                } else {
                    delete this.datus.peso;
                }
            },

            description: function(ero9) {
                if (ero9 != "") {
                    this.datus.description = ero9;
                } else {
                    delete this.datus.description;
                }
            },
            stateCode: function(ero10) {
                if (ero10 != "") {
                    this.datus.stateCode = ero10;
                } else {
                    delete this.datus.stateCode;
                }
            },
            stateName: function(ero11) {
                if (ero11 != "") {
                    this.datus.stateName = ero11;
                } else {
                    delete this.datus.stateName;
                }
            },
            cityName: function(ero12) {
                if (ero12 != "") {
                    this.datus.cityName = ero12;
                } else {
                    delete this.datus.cityName;
                }
            },
            tipo: function(ero13) {
                if (ero13 != "") {
                    this.datus.tipo = ero13;
                } else {
                    delete this.datus.tipo;
                }
            },


        },

    };
</script>


<style scoped>


</style>