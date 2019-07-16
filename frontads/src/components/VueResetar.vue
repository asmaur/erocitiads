<template>


    <div>

        <no-nav />


        <div id="main" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">

                    <div class="col-md-6 offset-md-3">
                        <div class="card" style="color: #000;">
                            <div class="card-header text-center">
                                <h5>Nova senha</h5>
                            </div>

                            <div class="card-body">
                                
                                
                                <div class="alert alert-danger" role="alert" v-show="!valide">
                                    <h4 class="alert-heading">Opaa!</h4>
                                    <p>Este link não está mais ativo. Solicite um novo link. <br> Obrigado.</p>
                                    <hr>

                                </div>

                                <form v-show="valide" @submit.prevent="ResetPassword">
                                    <div class="form-group">
                                        <label for="password">Nova senha </label>
                                        <input type="password" class="form-control" id="password" v-model="password" v-validate="{alpha_dash: true, required: true}" name="password" ref="password" placeholder="Entre sua senha com no minimo um número" title="Deve conter no minimo um número" required>
                                        <span class="alert-danger" v-for="error in errors.collect('password')" :key="error.index">{{ error }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label for="confirm_password">Confirmar senha</label>
                                        <input type="password" class="form-control" id="confirm_password" v-model="confirm_password" v-validate="'required|confirmed:password'" data-vv-as="password"  title="Deve conter no minimo um número" placeholder="Confirme a senha" name="confirm_password" required>
                                        <span class="alert-danger" v-for="error in errors.collect('confirm_password')" :key="error.index">{{ error }}</span>
                                    
                                    </div>
                                    

                                    <button type="submit" class="btn btn-primary btn-block entrar">Submit</button>
                                </form>

                            </div>


                        </div>
                    </div>

                </div>
            </div>



        </div>



    </div>



</template>


<script>
    import ax from '../genapi'
    

    export default {
        name: "VueResetar",
        
        data(){
            return {
                valide: null,
                password: null,
                confirm_password: null,
            }
        },
        methods:{
            ResetPassword(){
                this.$validator.validate().then(valid => {
                //console.log(valid)
                if(valid){
                    
                    
                    ax.post("log/change_password/", {"code": this.$route.params.reset , "password": this.password, "confirm_password": this.confirm_password})
                    .then(response => {
                        this.$noty.success(response.data.message)
                    })
                    .catch(error => {
                        this.$noty.error(error.response.data.message)
                    })
                    
                }else{
                    //console.log("else")
                    this.$noty.error("As senhas não correspondem.")
                }
                
            })
        }
            
        },
        created() {
            ax.post("log/check_code/",{"code": this.$route.params.reset})
            .then(response =>{
                this.valide = response.data.success;
            })
            .catch(error =>{
                this.valide = error.response.data.success;
            })
        },
        

    }
</script>