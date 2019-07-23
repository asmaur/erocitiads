<template>
    
    <div>
        
        <no-nav />
        <not-found />
        
    </div>
    
</template>


<script>
    
    import NoNav from '@/components/NoNav.vue'
    import NotFound from '@/components/NotFound.vue'
    
    
    export default{
        name: "Found404",
        components:{
            NoNav,
            NotFound,
        },
    }

</script>