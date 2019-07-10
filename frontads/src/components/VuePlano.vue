<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Ative o seu plano</h2>
      </div>

      <mem-item v-for="item in mem" v-bind:key="item.id" :plano="item" :pk="pk" :slug="slug" :planos="planos"/>

    </div>
  </div>
</template>

<script>

import MemItem from '@/components/MemItem.vue'
import ax from '../api.js'

export default {
    name: "VuePlano",
    props:{
        pk: Number,
        slug: String,
    },
    data(){
        return{
            mem: {},
            planos: {},
        }
    },
    components:{
        MemItem,
    },
    methods:{
        getMem() {            
            
            ax.get('mem/',)
                .then(response => [ this.mem = response.data, ])
                .catch();
        },
        getPlanos(){
            ax.get('mem/'+this.$route.params.id+'/planos/',)
                .then(response => [ this.planos = response.data, ])
                .catch()
        },
    },
    created(){
        this.getMem();
        this.getPlanos();
    },
}
</script>