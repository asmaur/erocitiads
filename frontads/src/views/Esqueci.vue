<template>
    
    <div>
    
        <no-nav />
        <vue-esqueci />
    
    </div>
    
</template>


<script>
    
    import VueEsqueci from "@/components/VueEsqueci.vue";
    import NoNav from '@/components/NoNav.vue'
    
    export default{
        name: "Esqueci",
        components:{
            VueEsqueci,
            NoNav,
        }
    }

</script>