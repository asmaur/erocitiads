<template>
    
    <div class="modal fade" id="newsletterModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header text-center">
                    <h5 class="modal-title" id="exampleModalCenterTitle">Receba novidades</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    
                    <div class="card text-center" id="notif">
                        
                        <div class="card-body">

                            <form @submit.prevent="sendEmail">
                                <!-- {% csrf_token %} -->
                                <div class="form-group">

                                    <input type="email" class="form-control email" id="email" name="email" placeholder="Email" v-model="email" required>
                                </div>
                                <button type="submit" class="btn btn-block">Enviar Email</button> 
                            </form>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</template>


<script>
    
    import ax from '../genapi.js'; 
    
    export default{
        name: "NewsLetter",
        
        data(){
            return{
                email: null
            }
        },
        methods:{
            sendEmail(){
                ax.post("/log/adsnewsletter/", {"email": this.email})
                .then(response => {
                    this.$noty.success(response.data.message);
                })
                .catch(error => {
                    this.$noty.error(error.response.data.message);
                })
            }
        }
        
    }

</script>