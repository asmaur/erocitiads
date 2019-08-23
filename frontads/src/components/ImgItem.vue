<template>

    <div class="col-sm-4">
        <div class="wiz-gal">
            <div class="wiz-vip">
                <button class="btn btn-danger" @click="removeImg(imag.id)">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

            <a :href="imag.image_erociti" class="wiz-card">
                <img class="img-fluid" :src="imag.image_erociti" alt="">
            </a>
        </div>
    </div>
    

</template>


<script>

import ax from "../api.js";
    
export default{
    name: "ImgItem",
    
    props:{
        imag: {},
    },
    data(){
            return{
                img_url: 'https://api.erociti.com',
            }
        },
    
    methods:{
        removeImg: function(id){
             ax.delete("img/" + id + "/").then(response => {
                    this.$noty.success( response.data.message)
                 setTimeout(location.reload(), 10000)
            })
        },
    },
    
}

</script>