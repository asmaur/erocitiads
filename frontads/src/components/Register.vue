<template id="">

    <div>


        <!-- register modal -->


        <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="registerModal">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Registrar-se</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body text-left">
                        <form @submit.prevent="createUser">
                            <div class="form-row">

                                <div class="form-group col-md-12">
                                    <label for="username" class="col-form-label">Nome de usuário:</label>
                                    <input type="text" class="form-control" id="username" name="username" maxlength="7" v-validate="{ alpha: true, max: 7, required:true }" v-model="username" title="Deve conter somente letras minusculas e no maximo 7 letras" placeholder="Entre um nome de usuário (no maximo 7 letras minusculas)" required>
                                    <span class="alert-danger" v-for="error in errors.collect('username')" :key="error.index">{{ error }}</span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="nome" class="col-form-label">Nome</label>
                                    <input type="text" class="form-control" id="nome" name="nome" v-validate="{ alpha: true }" v-model="first_name" placeholder="Entre seu nome" required>
                                    <span class="alert-danger">{{ errors.first('nome') }}</span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="sobrenome" class="col-form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="sobrenome" name="sobrenome" v-validate="{ alpha: true }" v-model="last_name" placeholder="Entre seu sobrenome" required>
                                    <span class="alert-danger">{{ errors.first('sobrenome') }}</span>
                                </div>


                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" v-model="email" v-validate="'required|email'" name="email" ref="email" placeholder="Entre seu email"> <!-- regrex="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"  required> -->
                                    <span class="alert-danger" v-for="error in errors.collect('email')" :key="error.index">{{ error }}</span>

                                </div>
                                <div class="form-group col-md-6">
                                    <label for="confirm_email">Confirmar Email</label>
                                    <input type="email" class="form-control" id="confirm_email" v-model="confirm_email" v-validate="'required|confirmed:email'" data-vv-as="email" placeholder="Confirmar o email" name="confirm_email" required>
                                    <span class="alert-danger" v-for="error in errors.collect('confirm_email')" :key="error.index">{{ error }}</span>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="password">Senha</label>
                                    <input type="password" class="form-control" id="password" v-model="password" v-validate="{alpha_num: true, required: true}" name="password" ref="password" placeholder="Entre sua senha(no minimo um número)" title="Deve conter no minimo um número" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}">
                                    <span class="alert-danger" v-for="error in errors.collect('password')" :key="error.index">{{ error }}</span>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="confirm_password">Confirmar Senha</label>
                                    <input type="password" class="form-control" id="confirm_password" v-model="confirm_password" v-validate="'required|confirmed:password'" data-vv-as="password" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" title="Deve conter no minimo um número" placeholder="Confirme a senha" name="confirm_password" required>

                                    <span class="alert-danger" v-for="error in errors.collect('confirm_password')" :key="error.index">{{ error }}</span>

                                </div>
                            </div>
                            <div class="form-row">

                                <div class="form-group col-md-4">
                                    <label for="estado">Estado</label>
                                    <select class="form-control" id="estado" name="estado" v-model="getcity" required>
                                        <option value="">Selecione seu estado</option>
                                        <option v-for="state in states" :value="state" :key="state.id">{{state.nome}}</option>

                                    </select>
                                </div>

                                <div class="form-group col-md-4">

                                    <label for="cidade">Cidade</label>
                                    <select class="form-control" id="cidade" name="cidade" v-model="cityName" required>
                                        <option>Selecione sua cidade</option>
                                        <option v-for="city in cities" :value="city.nome" :key="city.id">{{city.nome}}</option>
                                    </select>
                                </div>


                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-4">
                                    <label for="cpf">CPF</label>
                                    <input type="tel" class="form-control" id="cpf" v-model="cpf" placeholder="Entre seu CPF" name="cpf" v-mask="'###.###.###-##'" required>
                                </div>
                                <div class="form-group col-md-3">
                                    <label for="code_area">Codigo de área</label>
                                    <input type="tel" class="form-control" id="code_area" maxlength="2" v-model="code_area" v-mask="'##'" placeholder="Entre seu DDD" name="code_area" pattern="^\d{2}$" required>
                                </div>
                                <div class="form-group col-md-4">
                                    <label for="telefone">Telefone</label>
                                    <input type="text" class="form-control" id="telefone" v-model="phone" v-validate="{required: true}" minlength="11" min="11" v-mask="'###-###-###'" placeholder="Entre seu telephone" name="telefone" required>
                                    <span class="alert-danger">{{ errors.first('telefone') }}</span>
                                </div>

                            </div>

                            <div class="form-row">
                                <div class="form-group col-md-6 offset-md-3 text-center">
                                    <div class="custom-control custom-checkbox">
                                                                                                                     
                                        <input type="checkbox" class="custom-control-input" id="aceito" name="aceito" v-model="aceito" v-validate="{required: true}">
                                        <label class="custom-control-label" for="aceito">  Li e aceito os termos e condições de uso </label>
                                        <br>
                                        <span class="alert-danger">{{ errors.first('aceito') }}</span>
                                    </div>
                                </div>

                                <div class="form-group col-md-12">
                                    <ol>
                                        <li>Cadastrando-se você confirma <strong>Ser maior de 18 anos de idade.</strong> </li>
                                        <li> Leu e concorda com os <router-link to="/termo-de-uso" data-dismiss="modal"> termos e condições de uso. </router-link>
                                        </li>
                                        <li>Ter ensaio profissional.</li>
                                    </ol>
                                </div>

                            </div>


                            <div class="modal-footer" style="display: flex; justify-content: space-between;">
                                <button type="button" class="btn btn-secondary fechar" data-dismiss="modal">Fechar</button>
                                <button type="submit" class="btn btn-primary entrar">Registrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


        <!-- End register modal -->



    </div>

</template>

<script>
    import axigen from '../genapi.js';
    import axios from 'axios'
    import $ from 'jquery'

    export default {
        name: 'Register',
        data() {
            return {
                states: {},
                cities: {},
                getcity: '',
                stateCode: null,
                stateName: null,
                cityName: null,
                code_area: null,
                phone: null,
                cpf: null,
                aceito: null,
                /* user */
                username: null,
                first_name: null,
                last_name: null,
                email: null,
                confirm_email: null,
                password: null,
                confirm_password: null,
                email_error: false,
                password_error: false,
                datus: {},
            }
        },
        computed: {

            fone: function() {
                var fon = this.phone.replace(/\D/g, '')
                return fon

            },
        },
        methods: {

            getStates() {
                axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
                    .then(response => {
                        this.states = response.data
                    })
            },
            createUser() {
                //console.log(this.datus);


                this.$validator.validateAll().then((valid) => {
                    //console.log(valid)

                    if (valid) {

                        this.$noty.info("Processando os dados, Aguarde", {
                            timeout: 8000,
                        })

                        $('#registerModal').modal('hide')

                        axigen.post("/log/", this.datus)
                            .then(response => {
                                this.$noty.success(response.data.message)

                                setTimeout(() => {
                                    this.$router.push("/")
                                }, 1000);
                            })
                            .catch(error => {

                                this.$noty.error(error.response.data.message)


                            })
                    } else {
                        this.$noty.error("O formúlario contém erros.")
                    }
                })
            },


        },
        watch: {
            getcity: function(state) {
                //console.log(state.id);
                axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + state.id + "/municipios")
                    .then(response => {
                        this.cities = response.data
                    });
                //this.stateCode = state.sigla;
                this.stateName = state.nome;


            },
            username: function(ero1) {
                if (ero1 != "") {
                    this.datus.username = ero1;
                } else {
                    delete this.datus.username;
                }
            },
            first_name: function(ero2) {
                if (ero2 != "") {
                    this.datus.first_name = ero2;
                } else {
                    delete this.datus.first_name;
                }
            },
            last_name: function(ero3) {
                if (ero3 != "") {
                    this.datus.last_name = ero3;
                } else {
                    delete this.datus.last_name;
                }
            },
            stateName: function(ero4) {
                this.datus.state = ero4;
            },
            cityName: function(ero5) {
                this.datus.city = ero5;
            },
            code_area: function(ero6) {
                if (ero6 != "") {
                    this.datus.code_area = ero6;
                } else {
                    delete this.datus.code_area;
                }
            },
            phone: function(ero7) {
                if (ero7 != "") {
                    this.datus.phone = this.fone;
                } else {
                    delete this.datus.phone;
                }
            },
            cpf: function(ero8) {
                if (ero8 != "") {
                    this.datus.cpf = ero8;
                } else {
                    delete this.datus.cpf;
                }
            },
            email: function(ero9) {
                if (ero9 != "") {
                    this.datus.email = ero9;
                } else {
                    delete this.datus.email;
                }
            },
            confirm_email: function(ero10) {
                if (ero10 != "") {
                    this.datus.confirm_email = ero10;
                } else {
                    delete this.datus.confirm_email;
                }
            },
            password: function(ero11) {
                if (ero11 != "") {
                    this.datus.password = ero11;
                } else {
                    delete this.datus.password;
                }
            },
            confirm_password: function(ero12) {
                if (ero12 != "") {
                    this.datus.confirm_password = ero12;
                } else {
                    delete this.datus.confirm_password;
                }
            },


        },
        created() {
            this.getStates();

        },

    }
</script>


<style scoped>

</style>