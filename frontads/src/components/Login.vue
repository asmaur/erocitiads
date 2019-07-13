<template>

    <!-- login modal -->

    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body text-left">
                    <form @submit.prevent="login">
                        <div class="form-group">
                            <label for="username" class="col-form-label">Nome de usuário:</label>
                            <input type="text" class="form-control" id="username" name="username" v-model="username" placeholder="Entre seu nome de usuário" required>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-form-label">Senha:</label>
                            <input type="password" class="form-control" id="password" name="password" v-model="password" placeholder="Entre sua senha" required>
                        </div>

                        <div class="form-group">
                            <router-link to="esqueci-minha-senha" data-dismiss="modal">Esqueci minha senha.</router-link>
                        </div>



                        <div class="modal-footer" style="display: flex; justify-content: space-between;">
                            <button type="button" class="btn btn-secondary fechar" data-dismiss="modal">Fechar</button>
                            <button type="submit" class="btn btn-primary entrar">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>



    <!-- End login modal -->

</template>

<script>
    
    import $ from "jquery"

    import axigen from '../genapi.js';

    export default {
        name: 'Login',

        data() {
            return {
                password: null,
                username: null,
                datus: {},
                user: {}
            }
        },
        methods: {
            login() {
                if ($.isEmptyObject(this.datus)) {
                    this.$noty.error("Entre com seu nome de usuário e senha.");
                } else {

                    axigen.post("log/login/", this.datus)
                        .then(response => {
                            const token = response.data.token
                            const agente = response.data.agente.agente
                            localStorage.setItem('token', token) //response.data.token),
                            localStorage.setItem('log', response.data.log),
                                localStorage.setItem('agente', JSON.stringify(agente)) //response.data.agente)),


                            delete response.data.agente.agente
                            const user = response.data.agente
                            localStorage.setItem('user', JSON.stringify(user))
                            //localStorage.setItem('user', JSON.stringify(response.data.agente.user)),
                            this.$noty.success(response.data.message)
                            $('#loginModal').modal('hide')
                            setTimeout(() => {
                                this.$router.push("/dash/" + agente.id + "/")
                                
                            }, 2000);

                        })
                        .catch(error => {
                            setTimeout(() => {
                                this.$noty.error(error.response.data.message)
                            }, 500);
                            //setTimeout(this.$noty.error(error.response.data.message), 50000)
                            //console.log(error.response.data.message)
                        })
                }
            },
            /*login(){
                this.$store.dispatch(AUTH_REQUEST, this.datus).then(()=>{
                    this.$router.push('/dash/')
                })
            },*/
        },
        watch: {
            password: function(ero1) {
                if (ero1 != "") {
                    this.datus.password = ero1;
                } else {
                    delete this.datus.password
                }
                //console.log(this.datus);
            },
            username: function(ero2) {
                if (ero2 != "") {
                    this.datus.username = ero2;
                } else {
                    delete this.datus.username
                }
                //console.log(this.datus);
            },
        },

    }
</script>


<style scoped>

</style>