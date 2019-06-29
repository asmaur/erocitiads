<template>


    <div>

        
            <div id="dash-header" class="d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                    <h2>{{perf.nome}} {{perf.sobrenome}}</h2>

                </div>

            </div>
        </div>

    </div>

    <div id="dash">


        <div class="container">
            <div class="row">
                <div class="col-md-10 offset-md-1">

                    <!-- profile -->

                    <add-image />


                </div>               
                
                <hr>
                
                <div class="col-md-4 offset-md-4">                    
                    <h2 class="text-center" style="margin-top: 1rem;">Minhas fotos</h2>
                    
                </div>
                
                <hr>
                
            </div>
            
            <div class="row">
                
                <img-item v-for="ima in imagen" :imag="ima" v-bind:key="ima.id" />
                
               
                
            </div>
            
            
            
        </div>

    </div>
        
        

    </div>


</template>

<script>
    import ax from "../api.js"
    import ImgItem from '@/components/ImgItem.vue'
    import AddImage from '@/components/AddImage.vue'

export default {
    name: "EditarFotos",
    
    data(){
        return{
            imagen: {},
            perf: {},
        }
    },
    components: {
        ImgItem,
        AddImage,
    },
    
    methods: {
        getData() {
                ax.get("img/" + this.$route.params.id + "/").then(response => [
                    (this.imagen = response.data),
                ])
            },

        getPer() {
                ax.get("pf/" + this.$route.params.id + "/mini/").then(response => [
                    (this.perf = response.data),
                ])
            },

    },
    created(){
        this.getData();
        this.getPer();
    },
}
</script>




