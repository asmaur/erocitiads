<template>

    <div class="card">
        <div class="card-header" id="headingFive">
            <h5 class="mb-0">
                <button class="btn btn-link btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Fotos
                </button>
            </h5>
        </div>
        <div id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body">

                <form @submit.prevent="addData">

                    <div>
                        <label style="font-size: 14px;">
                            <span style='color:navy;font-weight:bold'>Instrução :</span>
                        </label>
                        <ul>
                            <li>
                                arquivos aceitos (jpg, png, jpeg)
                            </li>
                            <li>
                                Numero máximo de arquivos de 15 com 1MB cada 
                            </li>

                        </ul>                       
                        
                       
                        
                        <!--To give the control a modern look, I have applied a stylesheet in the parent span.-->
                        <span class="btn btn-success fileinput-button">

                            <input type="file" name="files" id="files" multiple @change="handleFileUpload" v-validate="'ext:jpeg,jpg,png|size:1500'" accept="image/jpeg, image/png, image/jpg," :disabled="active">
                            <br />
                            
                        </span>
                         <span class="alert-danger" v-for="error in errors.collect('files')" :key="error.index">{{ error }}</span> 

                    </div>

                   

                    <div class="container">
                        <div class="row">
                          
                           
                            <!--
                            <output id="Filelist" >
                                <ul class="thumb-Images">
                                    <li v-for="(url, index) in files" :key="url.id">
                                        <div class="img-wrap"> 
                                            <span class="close" style="position: absolute" @click="removeImg(index)">&times;</span>
                                            <img class="thumb" :src="url" title="" data-id="i.id"/>
                                        </div>
                                    </li>
                                </ul>
                                
                            </output> -->

                        </div>
                    </div>
                    
                     <div class="modal-footer" style="display: flex; justify-content: space-between;">
                        <!-- <button type="reset" class="btn btn-secondary fechar" data-dismiss="modal">Resetar</button> -->
                        
                        <button type="submit" class="btn btn-primary entrar">Salvar</button>
                    </div>


                </form>

            </div>
        </div>
    </div>


</template>


<script>
    import ax from "../api.js"
    import $ from "jquery"
    //import UpImage from '@/components/UpImage.vue'
    
    export default {
        name: "AddImage",
        
        data(){
            return{
                // You can store all your files here
                //attachments: [],
                // Each file will need to be sent as FormData element
                data: new FormData(),
                percentCompleted: 0, // You can store upload progress 0-100 in value, and show it on the screen
                
                filelen: 0,
                index: 0,
                total: 0,
                files: {},
                image: {}

            }
        },
        computed:{
            active: function(){
                if(this.filelen + this.files>=15){
                    this.$noty.warning("O numero de arquivos passou dos 15 permitidos");
                    return true;
                }else{
                    return false;
                }
            }
        },
        components:{
            //UpImage,
        },
        
        methods:{
             
            handleFileUpload: function(ev){
                this.files = ev.target.files
                //var self = this;
               /* var files = ev.target.files;
                    for(let i = 0; i < files.length; i++) {
                        let reader = new FileReader();
                        reader.onloadend = function(evt) {
                            
                            self.attachments.push(evt.target.result);
                        }
                        reader.readAsDataURL(files[i]);
                    }*/
                //console.log(self.attachments);
               
            },
          
            
            getCount(){
                 ax.get("img/" + this.$route.params.id + "/count/").then(response =>{this.filelen=response.data.imagelen})
            },
            
            
            
            addData(){
                
                if($.isEmptyObject(this.files)){
                    this.$noty.error("Selecione as fotos!");
                }else{
                    var formData = new FormData(); 
                    
                    for(var i = 0; i < this.files.length; i++ ){
                        let file = this.files[i];
                        //console.log(file);
                        formData.append('file[' + i + ']', file);
                    }
                    //formData.append("files", this.attachments)
                    //console.log(formData)
                    this.$noty.info( "Processando as imagens, Aguarde",{timeout: 8000,})
                    
                    ax.post("img/"+this.$route.params.id+"/add/", formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                          })
                        .then(response => { 
                            
                            this.$noty.success( response.data.message)
                                 setTimeout(() => {
                                    location.reload();
                                }, 2000);
                              
                    })
                        .catch(error => {
                            this.$noty.error(error.response.data.message)
                        }) 
                    
                }
            },
            
          
        },
        
        created() {
            //this.start();
        }
        
    }
    
    
    
    
    
    
    
    
    
</script>


<style scoped>
     .vue_component__upload--image{
        padding: 5px;
        cursor: pointer;
        min-height: 80px;
        border-radius: 5px;
    }
    .upload_image_form__thumbnails{
        margin-bottom: 1em;
    }
     .upload_image_form__thumbnail{
        border-radius: 2.5px;
        position:relative;
        width:20%;
        padding:20% 0 0;
        overflow: hidden;
        margin:10px;
        display:inline-block;
    }

     .upload_image_form__thumbnail img{
        position: absolute;
        top:50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        max-height: 150%;
        opacity: 0;
        transform: translateX(-50%) translateY(-50%);
        transition: 1s opacity;
    }
    .upload_image_form__thumbnail img.show{
        opacity: 1;
    }
     .upload_image_form__thumbnail img:hover{
        filter: blur(2px);
    }
     .upload_image_form__thumbnail.bad-size img{
        filter: grayscale(100%);
    }
    .vue_component__upload--image .upload_image_form__thumbnail.uploaded img{
        opacity: 0.1;
    }
     .upload_image_form__thumbnail span{
        position: absolute;
        top: -5px;
        left: 0px;
        z-index: 100;
        padding: 0px 1px;
        border-radius: 2px;
        background-color: grey;
    }
    

</style>