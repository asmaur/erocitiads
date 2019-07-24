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


        <!-- <div class="modal fade" id="ver-conta" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
        <div class="modal-dialog modal-lg" tabindex="-1" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">DETALHE DA CONTA</h5>
                    <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> -->
                </div>
                <div class="modal-body">

                    <form class="text-left">
                        <fieldset disabled>
                            <div class="form-row">
                                <div class="form-group col-md-12">
                                    <label for="username" class="col-form-label">Nome de usuário:</label>
                                    <input type="text" class="form-control" id="username" name="username" :value="users.username" placeholder="Entre um nome de usuário" required disabled>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="nome" class="col-form-label">Nome</label>
                                    <input type="text" class="form-control" id="nome" name="nome" :value="users.first_name" placeholder="Entre seu nome" required disabled>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="sobrenome" class="col-form-label">Sobrenome</label>
                                    <input type="text" class="form-control" id="sobrenome" name="sobrenome" :value="users.last_name" placeholder="Entre seu sobrenome" required disabled>
                                </div>


                                <div class="form-group col-md-6" v-if="users.agente">
                                    <label for="telefone">Telefone</label>
                                    <input type="telephone" class="form-control" id="telefone" :value="users.agente.phone" name="telefone" placeholder="Entre seu telefone" required>
                                    <div class="invalid-feedback">
                                        Entre um email valido.
                                    </div>
                                </div>
                                <div class="form-group col-md-6" v-if="users.agente">
                                    <label for="telefone">Codigo de área</label>
                                    <input type="telephone" class="form-control" id="codigo" :value="users.agente.code_area" name="codigo" placeholder="Entre seu telefone" required>
                                    <div class="invalid-feedback">
                                        Entre um email valido.
                                    </div>
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" name="email" :value="users.email" placeholder="Entre seu email" required>
                                    <div class="invalid-feedback">
                                        Entre um email valido.
                                    </div>
                                </div>
                               <!-- <div class="form-group col-md-6" v-if="users.agente">
                                    <label for="email_confirm">CPF</label>
                                    <input type="email" class="form-control" id="email_confirm" :value="users.agente.cpf" placeholder="Entre seu CPF" name="email_confirm" required>
                                </div>

                                 <div class="form-group col-md-6">
                                <label for="senha">Senha</label>
                                <input type="password" class="form-control" id="senha" name="senha" placeholder="Entre sua senha" required>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="senha_confirmar">Confirmar Senha</label>
                                <input type="password" class="form-control" id="senha_confirmar" placeholder="Confirme a senha" name="senha_confirmar" required>
                            </div> -->
                            </div>
                            <div class="form-row">


                                <div class="form-group col-md-6" v-if="users.agente">
                                    <label for="Estado">Estado</label>
                                    <input type="email" class="form-control" :value="users.agente.state">
                                </div>

                                <div class="form-group col-md-6" v-if="users.agente">
                                    <label for="cidade">Cidade</label>

                                    <input type="email" class="form-control" :value="users.agente.city">
                                </div>


                            </div>
                        </fieldset>

                    </form>



                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary mr-auto fechar" data-toggle="modal" data-target="#deletar-perfil">Deletar Conta</button>
                    <router-link :to="'/users/e/account/2/'" type="reset" class="btn btn-secondary entrar">Editar</router-link>

                </div>
            </div>
        </div>
           
           
           
           <!-- Modal deletar perfil -->
            <div class="modal fade" id="deletar-perfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">DELETAR O CONTA</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5>Tem certeza que deseja deletar sua conta ?</h5>
                            <p>Ao deletar o conta, não será possível restaurar ou recuperar os dados relativos a esta conta.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary mr-auto fechar" data-dismiss="modal">FECHAR</button>
                            <button type="button" class="btn btn-primary entrar" @click="deleteProfile(per.pk)">DELETAR PERFIL</button>
                        </div>
                    </div>
                </div>
            </div>
           
           
            
 
        
    </div>




</template>


<script>
    
import ax from "../api.js";    
    
    
    export default {
        name: "Conta",
        data(){
            return{
                users: {},
            }
        },
        components: {
            
        },
        
        methods:{
            getData(){
                ax.get("users/"+this.$route.params.id+"/")
                .then(response => {this.users=response.data})
            },
            deleteConta(id){
                ax.delete("users/"+id+"/")
                    .then(response => {
                        localStorage.clear();
                        this.$noty.success(response.data.message);
                        
                        setTimeout(()=>{
                            this.$router.push("/")
                        },100);
                    })
                    .catch(error => {
                        this.$noty.error(error.response.data.message);
                    })
            },
        },
        created(){
            this.getData();
        },
        
        
    }
    
    
    
    
    
    
    
</script>