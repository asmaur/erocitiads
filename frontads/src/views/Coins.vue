<template>
    
    <div>
        
        <dash-nav />
        <vue-coins />
        
    </div>
    
    
</template>


<script>
    
    import DashNav from "@/components/DashNav.vue"
    import VueCoins from "@/components/VueCoins.vue"
    
    export default{
        name: "Coins",
        
        components:{
            DashNav,
            VueCoins
        }
    }

</script>