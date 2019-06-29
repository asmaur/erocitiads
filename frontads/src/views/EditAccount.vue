<template>
    
        <div>
            <DashNav />
            <EditarConta />
            
        </div>

        

</template>

<script>
    
import DashNav from "@/components/DashNav.vue";
import EditarConta from "@/components/EditarConta.vue";
    
export default {
    name: "EditAccount",
    
    components:{
        DashNav,
        EditarConta,
    },
}
</script>