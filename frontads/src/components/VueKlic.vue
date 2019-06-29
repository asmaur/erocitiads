<template>
  <div class="col-md-4 col-lg-4">
    <div class="card">
      <div class="card-body">
        <div class="viz" style="margin-top: 2rem;">
         <b> {{clics.clicked}} clics no seu número hoje </b>
        </div>

      <!--  <div class="graf">grafico</div> -->
      </div>

      <div class="card-footer">
        <h6>
          <i class="fas fa-clock"></i> Data: {{date()}}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>

import ax from '../api.js'

export default {
    name: "VueKlic",
    props:{
        pk: Number,
    },
    data(){
        return{
            clics: Number,
        }
    },
     methods:{
       getViews(v){
            ax.get('clics/'+v+'/days/',)
                .then(response => [ this.clics = response.data, ]);
            
        },
        date(){
        var  letre =["","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
        var  ganme = new Date();
          
          return letre[ganme.getMonth()+1]+'/'+ganme.getFullYear();
          
      },
    },
    
    watch:{
        pk: function(newpk){
            this.getViews(newpk);
        },
    },
}
</script>