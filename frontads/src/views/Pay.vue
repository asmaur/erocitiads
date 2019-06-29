<template>
    
    <div>
        <dash-nav />
        <vue-pay />
        
    </div>
    
</template>


<script>

import DashNav from "@/components/DashNav.vue";
import VuePay from "@/components/VuePay.vue";
    
export default{
    name: "Pay",
    components:{
        VuePay,
        DashNav,
    },
}

</script>