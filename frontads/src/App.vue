<template>
    <div id="app">
        

        <router-view :key="$route.fullPath" />

       <dash-tour />
       
        <Footer />
        
        
        
        
        
    </div>
</template>


<script>
    import Footer from '@/components/Footer.vue'
    import DashTour from '@/components/DashTour.vue'
    
    export default {
        name: "App",
        components: {
            Footer,
            DashTour,
            
        },



    }
</script>