<template>


    <div>


        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2>{{per.nome}} {{per.sobrenome}}</h2>

                    </div>

                </div>
            </div>

        </div>

        <div id="dash">


            <div class="container">
                <div class="row">
                    <div class="col-md-10 offset-md-1">


                        <!-- profile -->

                        <div class="card" style="margin-bottom: 2rem;">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-transform: uppercase;">
                                        Dados do Perfil

                                    </button>

                                </h5>
                            </div>

                            <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">


                                    <form @submit.prevent="addData">



                                        <div class="form-row">
                                            <div class="form-group col-md-12 text-left">

                                                <label for="cidade">Categoria</label>
                                                <select class="form-control" id="category" name="category" v-model="category" required>
                                                    <option value="mulheres">Mulher</option>
                                                    <option value="homens">Homem</option>
                                                    <option value="transex">Transex</option>

                                                </select>
                                            </div>

                                            <div class="form-group col-md-6 text-left">
                                                <label for="nome" class="col-form-label">Nome do Perfil</label>
                                                <input type="text" class="form-control" id="nome" name="nome" placeholder="Entre um nome" v-model="nome" required>
                                            </div>
                                            <div class="form-group col-md-6 text-left">
                                                <label for="sobrenome" class="col-form-label">Sobrenome do Perfil</label>
                                                <input type="text" class="form-control" id="sobrenome" name="sobrenome" placeholder="Entre um sobrenome" v-model="sobrenome" required>
                                            </div>

                                        </div>

                                        <div class="form-row">

                                            <div class="form-group col-md-4 text-left">

                                                <label for="idade">Idade</label>
                                                <input type="number" min="18" class="form-control" id="idade" name="idade" placeholder="Entre sua idade" v-model="idade" required>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <label for="altura">Altura(m)</label>
                                                <input type="number" min="1.50" step="0.01" class="form-control" id="altura" name="altura" placeholder="Entre sua altura" v-model="altura" required>
                                            </div>

                                            <div class="form-group col-md-4 text-left">
                                                <label for="pais">Peso (Kg)</label>
                                                <input type="number" min="50" step="1" class="form-control" id="peso" name="peso" placeholder="Entre seu peso" v-model="peso" required>
                                            </div>


                                        </div>


                                     <!--   <div class="form-row">


                                            <div class="form-group col-md-6">
                                                <input type="text" hidden value="rs" name="code">
                                                <label for="Estado">Estado</label>
                                                <select class="form-control" id="estado" name="estado" required>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label for="cidade">Cidade</label>
                                                <select class="form-control" id="cidade" name="cidade" required>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>


                                        </div> -->

                                        <div class="form-row">

                                           <!-- <div class="form-group col-md-6 text-left">
                                                <label for="codigo">Código de área</label>
                                                <input type="text" class="form-control" id="codigo" placeholder="(DDD)" v-model="codigo" required>
                                            </div>-->
                                            <div class="form-group col-md-6 text-left">
                                                <label for="fone">Telefone</label>
                                                <input type="fone" class="form-control" id="fone" placeholder="(DDD) 999 999 999" name="fone" v-model="fone" required>
                                            </div>

                                        </div>



                                        <div class="form-row">
                                            <div class="form-group col-md-12 text-left">
                                                <label for="description">Descrição</label>
                                                <textarea name="description" id="description" class="form-control" v-model="description" cols="20" rows="5" maxlength="500" placeholder="Descrição com no máximo 300 palavras" required></textarea>
                                            </div>

                                        </div>
                                        
                                        <hr>
                                        <div class="form-row">
                                          <!--  <div class="form-group col-md-4">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="mulher" v-model="per.is_active" name="mulher" style>
                                                    <label class="custom-control-label" for="mulher">Ativo</label>
                                                </div>
                                            </div> -->

                                            <div class="form-group col-md-4 text-left">
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" id="is_working" v-model="is_working" name="is_working" >
                                                    <label class="custom-control-label" for="is_working">Perfil Trabalhando</label>
                                                </div>
                                            </div>



                                        </div>

                                        <hr>
                                        
                                        <div class="form-row">
                                            <div class="col-md-4">

                                                <img :src="per.capa" class="img-fluid" alt="">

                                                
                                            </div>
                                       
                                            <div>
                                                <label style="font-size: 14px;">
                                                    <span style='color:navy;font-weight:bold'>Instrução :</span>
                                                </label>
                                                <ul>
                                                    <li>
                                                        arquivos aceitos (jpg, png, jpeg)
                                                    </li>
                                                    <li>
                                                        arquivos aceitos (jpg, png, jpeg)
                                                    </li>

                                                </ul>
                                                <!--To give the control a modern look, I have applied a stylesheet in the parent span.-->
                                                <span class="btn btn-success fileinput-button">
                                                  <!--  <span>Foto de capa</span> -->
                                                    <input type="file" name="capa" id="capa" @change="handleFileUpload" accept="image/jpeg, image/png, image/gif,">
                                                    <!-- <input type="file" name="files[]" id="files" multiple accept="image/jpeg, image/png, image/gif,"> -->
                                                    <br />
                                                </span>

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

                    </div>
                </div>
            </div>

        </div>



    </div>


</template>

<script>
    
    import ax from "../api.js";
    import $ from "jquery"
    
    export default {
        name: "EditarPer",
        data(){
            return{
                category: null,
                nome: null,
                sobrenome: null,
                idade: null,
                altura: null,
                peso: null,               
                fone: null,
                //codigo: null,
                description: null,
                capa: '',                
                is_working: null,
                datus: {},
                old_val: {},
                per: {},
            }
        },
        computed:{
            phone: function(){
                return '55'+this.fone;
            }
        },
        methods:{
            getData(){
                ax.get("pf/" + this.$route.params.id + "/mini/").then(response => [
                    (this.per = response.data),

                    this.category = this.per.category,
                    this.nome = this.per.nome,
                    this.sobrenome = this.per.sobrenome,
                    this.idade = this.per.idade,
                    this.altura = this.per.altura,
                    this.peso = this.per.peso,
                    this.fone = this.per.phone,
                    this.codigo = this.per.codigo,
                    this.description = this.per.description,
                    this.capa = this.per.capa,
                    this.is_working = this.per.is_working,
                    
                    
                    /* old val */
                    
                    this.old_val.category = this.per.category,
                    this.old_val.nome = this.per.nome,
                    this.old_val.sobrenome = this.per.sobrenome,
                    this.old_val.idade = this.per.idade,
                    this.old_val.altura = this.per.altura,
                    this.old_val.peso = this.per.peso,
                    this.old_val.fone = this.per.phone,
                    this.old_val.codigo = this.per.codigo,
                    this.old_val.description = this.per.description,
                    this.old_val.capa = this.per.capa,
                    this.old_val.is_working = this.per.is_working,
                    
                    

                ]);
                
            },
            handleFileUpload(ev){
                this.capa = ev.target.files[0];
            },
            
            addData: function(){
                console.log(this.datus, this.capa);
                var formData = new FormData();                
                if(this.capa != this.old_val.capa){
                    console.log("New foto");
                    formData.append('capa', this.capa);
                    console.log(formData);
                }
                if(!$.isEmptyObject(this.datus)){
                    console.log(this.datus);
                    formData.append('datus', JSON.stringify(this.datus));
                    console.log(formData);
                }
                
                if(formData.has("capa") || formData.has("datus")){
                    
                    ax.put("pf/" + this.$route.params.id + "/", formData, )
                        .then(response => { this.$noty.success( response.data.message) },
                              this.getData(),     
                        )
                        .catch(error => {
                            this.$noty.error(error.response.data.message)
                        })
                   
                }else{
                    this.$noty.error("Cuidado com as  mudanças, Tente de novo..!");
                }
                    
                   
            },
        },
        
        created (){
            this.getData();
            //this.datus={};
            //console.log(this.datus);
            
        },
        watch: {
            category: function(ero1) {
                
                if (this.old_val.category != ero1){                   
                     this.datus.category = ero1;
                }else{
                    
                    delete this.datus.category; 
                } 
                //console.log(this.datus);
            },

            nome: function(ero2) {
                if (this.old_val.nome != ero2) {
                    if(ero2==""){
                        delete this.datus.nome;
                    }else{
                        this.datus.nome = ero2;
                    }
                }else{
                    delete this.datus.nome;
                } 
                //console.log(this.datus);
            },

            sobrenome: function(ero3) {
                if (this.old_val.sobrenome != ero3) {
                    if(ero3==""){
                        delete this.datus.sobrenome
                    }else{
                        this.datus.sobrenome = ero3;
                    }
                }else{
                    delete this.datus.sobrenome;
                }  
                //console.log(this.datus);
            },

            idade: function(ero4) {
                if (this.old_val.idade != ero4) {
                    if(ero4==""){
                        delete this.datus.idade;
                    }else{
                        this.datus.idade = ero4;
                    }
                } else{
                    delete this.datus.idade;
                }
                //console.log(this.datus);
            },
            altura: function(ero5) {
                
                if (this.old_val.altura != ero5){                    
                    if(ero5==""){
                        delete this.datus.altura;
                    }else{
                        this.datus.altura = ero5;
                    }
                }else{
                    
                    delete this.datus.altura;
                } 
                //console.log(this.datus);
            },

            peso: function(ero6) {
                if (this.old_val.peso != ero6){
                    if(ero6==""){
                        delete this.datus.peso;
                    }else{
                        this.datus.peso = ero6;
                    }
                }else{
                    delete this.datus.peso;
                } 
                //console.log(this.datus);
            },

            fone: function(ero7) {
                if (this.old_val.fone != ero7){
                    this.datus.phone = this.phone;
                    
                }else{
                    delete this.datus.phone;
                }  
                console.log(this.datus);
            },

            codigo: function(ero8) {
                if (this.old_val.codigo != ero8) {
                    if(ero8==""){
                        delete this.datus.codigo;
                    }else{
                        this.datus.codigo = ero8;
                    }
                }else{
                    delete this.datus.codigo;
                }
                //console.log(this.datus);
            },
            description: function(ero9) {
                if (this.old_val.description != ero9) {
                    if(ero9==""){
                        delete this.datus.description;
                    }else{
                        this.datus.description = ero9;
                    }
                }else{
                    delete this.datus.description;
                }
                //console.log(this.datus);
            },
            is_working: function(ero10) {
                console.log(this.old_val.is_working != ero10);
                if (this.old_val.is_working != ero10){  
                    
                    this.datus.is_working = ero10;  
                    
                }else{
                    
                    delete this.datus.is_working;
                    
                }
                //console.log(this.datus);
            },
        },
        
    }
    
    
</script>