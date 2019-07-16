<template>


    <div>

        <div id="main" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">

                    <div class="col-md-4 offset-md-4">
                        <div class="card" style="color: #000;">
                            <div class="card-header text-center">
                                <h5>Esqueci minha senha</h5>
                            </div>

                            <div class="card-body">

                                <form @submit.prevent="resetCode()">
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Entre seu email" v-model="email" required>
                                        <small id="emailHelp" class="form-text" style="color:#fff;">Um link para a troca será enviado neste email.</small>
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
        name: "VueEsqueci",
        
        data(){
            return{
                email: null,
            }
        },
        methods:{
            resetCode(){
                ax.post("log/password_code/",{"email": this.email})
                .then(response =>{
                    this.$noty.success(response.data.message)
                })
                .catch(error => {
                    this.$noty.error(error.response.data.message)
                })
            }
        }
        
    }
</script>