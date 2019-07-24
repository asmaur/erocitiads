<template>
    <div class="row">
        <div class="col-md-6 offset-md-3 text-center">
            <h2>Meus Planos</h2>
        </div>
        
        <my-subs v-for="plano in planos" :key="plano.id" :plano="plano"/>
    
    </div>
</template>

<script>
    import MySubs from '@/components/MySubs.vue'
import ax from '../api.js'
    
    export default {
        name: "MeuPlano",
        components:{
            MySubs,
        },
        props: {
            pk: Number,
        },
        data() {
            return {
                planos: {},
            }
        },
        methods: {
            getPlanos() {
                ax.get('mem/' + this.$route.params.id + '/planos/', )
                    .then(response => [this.planos = response.data, ])
                    .catch();
            },
            
            
        },
        created(){
            this.getPlanos();
        },
    }
</script>