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
                                Numero maximo de arquivos de 15 com 500 KB cada 
                            </li>

                        </ul>
                        <!--To give the control a modern look, I have applied a stylesheet in the parent span.-->
                        <span class="btn btn-success fileinput-button">
                            <!--<span>Clique para selecionar seus arquivos</span>-->
                            <input type="file" name="files[]" id="attachments" multiple @change="handleFileUpload" v-validate="'ext:jpeg,jpg,png|size:300'" accept="image/jpeg, image/png, image/gif," :disabled="active">
                            <br />
                            
                        </span>
                        <span class="alert-danger" v-for="error in errors.collect('files[]')" :key="error.index">{{ error }}</span>

                    </div>

                    <div class="modal-footer" style="display: flex; justify-content: space-between;">
                        <!-- <button type="reset" class="btn btn-secondary fechar" data-dismiss="modal">Resetar</button> -->
                        
                        <button type="submit" class="btn btn-primary entrar">Salvar</button>
                    </div>

                    <div class="container">
                        <div class="row">

                          <!--  <output id="Filelist" >
                                <ul class="thumb-Images">
                                    <li v-for="(url, index) in attachments" :key="url.id">
                                        <div class="img-wrap"> 
                                            <span class="close" style="position: absolute" @click="removeImg(index)">&times;</span>
                                            <img class="thumb" :src="url" title="" data-id="i.id"/>
                                        </div>
                                    </li>
                                </ul>
                                
                            </output> -->

                        </div>
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
        name: "AddImage",
        
        data(){
            return{
                // You can store all your files here
                attachments: [],
                // Each file will need to be sent as FormData element
                data: new FormData(),
                
                errors: {
                },
                percentCompleted: 0, // You can store upload progress 0-100 in value, and show it on the screen
                
                filelen: 0,
                urls: [],

            }
        },
        computed:{
            active: function(){
                if(this.filelen + this.attachments>=15){
                    this.$noty.warning("O numero de arquivo pasou dos 15 permitidos");
                    return true;
                }else{
                    return false;
                }
            }
        },
        
        methods:{
            handleFileUpload: function(ev){
                this.attachments = ev.target.files
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
            
            CheckFileType(fileType) {
                if (fileType == "image/jpeg") {
                    return true;
                } else if (fileType == "image/png") {
                    return true;
                } else if (fileType == "image/jpg") {
                    return true;
                } else {
                    //console.log(fileType);
                    return false;
                }
                
            },
            CheckFileSize(fileSize) {
                if (fileSize < 500000) {
                    return true;
                } else {
                    return false;
                }
                //return true;
            },
            
            //To check files count according to upload conditions
            CheckFilesCount(AttachmentArray) {
                //Since AttachmentArray.length return the next available index in the array, 
                //I have used the loop to get the real length
                var len = 0;
                for (var i = 0; i < AttachmentArray.length; i++) {
                    if (AttachmentArray[i] !== undefined) {
                        len++;
                    }
                }
                //To check the length does not exceed 10 files maximum
                if (len > 24) {
                    return false;
                } else {
                    return true;
                }
            },
            removeImg: function(im){
                this.attachments.splice(im,1);
                //console.log(this.attachments);
                //console.log("removed: "+im);
            },
            
            addData(){
                
                if($.isEmptyObject(this.attachments)){
                    this.$noty.error("Selecione as fotos!");
                }else{
                    var formData = new FormData(); 
                    
                    for(var i = 0; i < this.attachments.length; i++ ){
                        let file = this.attachments[i];
                        //console.log(file);
                        formData.append('file[' + i + ']', file);
                    }
                    //formData.append("files", this.attachments)
                    //console.log(formData)
                    ax.post("img/"+this.$route.params.id+"/add/", formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                          })
                        .then(response => { this.$noty.success( response.data.message)},
                              //this.getData(),     
                              location.reload(),
                        )
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