<template>
    
    <div>
        
    
        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2>DashBoad</h2>

                    </div>

                </div>
            </div>

        </div>

        <div id="dash">

            <div class="container">

                <div class="row">

                    <div class="col-md-6 offset-md-3">

                        <my-coins />

                    </div>


                </div>


            </div>


            <div class="container">
                <div class="row">

                    <div class="col-md-6 offset-md-3">

                        <pay-coins />

                    </div>
                </div>


            </div>




        </div>
        
        
        
        
    </div>
    
    
</template>


<script>
    
    import MyCoins from "@/components/MyCoins.vue"
    import PayCoins from "@/components/PayCoins.vue"
    
    export default{
        name: "VueCoins",
        components:{
            MyCoins,
            PayCoins,
        }
    }

</script>

<style>
    
    .pay{
        margin-top: 1rem;
    }
    
    .pay img{
        position: relative;
        height: 10vh;
        width: 100%;
    }
    
    
    
    
</style>

