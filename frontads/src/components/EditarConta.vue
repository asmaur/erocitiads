<template>

    <div>

        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2>DashBoard</h2>

                    </div>

                </div>
            </div>

        </div>



        <!-- user data -->
        <div class="modal-dialog modal-lg" tabindex="-1" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">DADOS DA CONTA {{us_pk}}</h5>
                    <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> -->
                </div>

                <form class="text-left" @submit.prevent="updateUser">

                    <div class="modal-body">


                        <fieldset>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="username" class="col-form-label">Nome de usuário:</label>
                                    <input type="text" class="form-control" id="username" name="username" maxlength="7" v-validate="{ alpha_num: true, max: 7 }" v-model="username" pattern="[a-z]{1,7}" title="Deve conter somente letras minusculas e no maximo 7 letras" placeholder="Entre um nome de usuário (no maximo 7 letras minusculas)" disabled>
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

                            </div>

                        </fieldset>


                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-secondary mr-auto entrar">Salvar</button>
                    </div>
                </form>
            </div>
        </div>


        <!-- agente data -->
        <div class="modal-dialog modal-lg" tabindex="-1" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">COMPLEMENTOS DA CONTA</h5>
                    <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> -->
                </div>
                <form class="text-left" @submit.prevent="updateAgente">

                    <div class="modal-body">
                        <fieldset>
                            <div class="form-row">
                                
                                <div class="form-group col-md-3">
                                    <label for="code_area">Codigo de área</label>
                                    <input type="tel" class="form-control" id="code_area" maxlength="2" v-model="code_area" v-mask="'##'" placeholder="Entre seu DDD" name="code_area" pattern="^\d{2}$" required>
                                </div>

                                <div class="form-group col-md-4">
                                    <label for="telefone">Telefone</label>
                                    <input type="text" class="form-control" id="telefone" v-model="phone" v-validate="{required: true}" minlength="11" min="11" v-mask="'###-###-###'" placeholder="Entre seu telephone" name="telefone" required>
                                    <span class="alert-danger">{{ errors.first('telefone') }}</span>
                                </div>
                                
                                <div class="form-group col-md-4">
                                    <label for="cpf">CPF</label>
                                    <input type="tel" class="form-control" id="cpf" v-model="cpf" placeholder="Entre seu CPF" name="cpf" v-mask="'###.###.###-##'" required>
                                </div>


                            </div>
                            <div class="form-row">


                                <div class="form-group col-md-6">
                                    <label for="Estado">Estado</label>
                                    <input type="text" class="form-control" :value="state" disabled>
                                </div>

                                <div class="form-group col-md-6">
                                    <label for="cidade">Cidade</label>
                                    <input type="text" class="form-control" :value="city" disabled>
                                </div>


                            </div>
                        </fieldset>

                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-secondary mr-auto entrar">Salvar</button>
                    </div>
                </form>
            </div>
        </div>




    </div>



</template>


<script>
    import ax from "../api.js";
    import $ from "jquery"

    export default {
        name: "EditarConta",
        data() {
            return {
                datum: {},
                datus: {},
                /*agente */
                code_area: null,
                phone: null,
                cpf: null,
                /* user */
                username: null,
                first_name: null,
                last_name: null,
                email: null,
                state: null,
                city: null,
                old: {},

                ag_pk: null,
                us_pk: null,


            }
        },
        computed: {
            br_fone: function() {
                return true;
            },
        },
        methods: {
            getData() {
                ax.get("users/" + this.$route.params.id + "/")
                    .then(response => [
                        this.code_area = response.data.agente.code_area,
                        this.phone = response.data.agente.phone,
                        this.cpf = response.data.agente.cpf,
                        this.ag_pk = response.data.agente.id,
                        this.state = response.data.agente.state,
                        this.city = response.data.agente.city,
                        /* user */
                        this.username = response.data.username,
                        this.first_name = response.data.first_name,
                        this.last_name = response.data.last_name,
                        this.email = response.data.email,
                        this.us_pk = response.data.id,

                        /* user */
                        this.old.username = response.data.username,
                        this.old.first_name = response.data.first_name,
                        this.old.last_name = response.data.last_name,
                        this.old.email = response.data.email,

                        /* ag */
                        this.old.code_area = response.data.agente.code_area,
                        this.old.phone = response.data.agente.phone,
                        this.old.cpf = response.data.agente.cpf,
                    ])
            },
            updateUser() {
                //console.log(this.datus)
                this.$validator.validateAll()

                if ($.isEmptyObject(this.datus)) {
                    this.$noty.error("Cuidado com as mudanças..!")
                } else {
                    ax.put("users/" + this.us_pk + "/", this.datus)
                        .then(response => {
                            this.$noty.success(response.data.message)
                            this.getData()
                            this.logout()

                        })
                        .catch(error => {
                            this.$noty.error(error.response.data.message)
                        })
                }
            },
            logout() {
                localStorage.clear();
                this.$noty.warning("Você editou seus dados, Faça login novamente ..!");
                setTimeout(() => {
                    this.$router.push("/")
                }, 1000);
            },

            updateAgente() {
                //console.log(this.datum)
                this.$validator.validateAll()

                if ($.isEmptyObject(this.datum)) {
                    this.$noty.error("Cuidado com as mudanças..!")
                } else {
                    ax.put("ag/" + this.ag_pk + "/", this.datum)
                        .then(response => {
                            this.$noty.success(response.data.message)
                            this.getData()
                        })
                        .catch(error => {
                            this.$noty.error(error.response.data.message)
                        })
                }
            },

        },
        created() {
            this.getData();
        },

        watch: {
            code_area: function(ero1) {
                if (this.old.code_area != ero1) {
                    if (ero1 != "") {
                        this.datum.code_area = ero1
                    }
                } else {
                    delete this.datum.code_area
                }
            },
            phone: function(ero2) {

                if (this.old.phone != ero2.replace(/\D/g, '')) {
                    if (ero2 != "") {
                        this.datum.phone = ero2
                    }
                } else {
                    delete this.datum.phone
                }
            },
            cpf: function(ero3) {
                if (this.old.cpf != ero3) {
                    if (ero3 != "") {
                        this.datum.cpf = ero3
                    }
                } else {
                    delete this.datum.cpf
                }
            },


            first_name: function(ero5) {
                if (this.old.first_name != ero5) {
                    if (ero5 != "") {
                        this.datus.first_name = ero5
                    }
                } else {
                    delete this.datus.first_name
                }
            },
            last_name: function(ero6) {
                if (this.old.last_name != ero6) {
                    if (ero6 != "") {
                        this.datus.last_name = ero6
                    }
                } else {
                    delete this.datus.last_name
                }
            },
            email: function(ero7) {
                if (this.old.email != ero7) {
                    if (ero7 != "") {
                        this.datus.email = ero7
                    }
                } else {
                    delete this.datus.email
                }
            },
        },
    }
</script>