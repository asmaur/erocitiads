<template>

    <div class="col-md-4">
    
        <div class="card">
            <div class="card-header">
                <h3>{{plano.membership_type}} </h3>
                <div class="price">
                    <span class="devise-symbol">R$</span> <span class="plan-amount">{{plano.price}}</span><span class="plan-period">/{{plano.valide_time}} dias</span>
                </div>
            </div>

            <div class="card-body card-list">
                <ul>
                    <li>kjshjd kjasgdjkgs</li>
                    <li> kjasgdjkgs </li>
                    <li>kjasgdjkgs</li>
                    <li>kjasgdjkgs</li>
                    <li>kjasgdjkgs</li>
                </ul>
                

                <p> <small>Esse plano é valido por {{plano.valide_time}} dias.</small> </p>
            </div>

            <div class="card-footer">
              <!--  <router-link :to="'/pay/'+slug+'/'+pk+'/'+plano.id+'/'" class="btn btn-primary btn-block ativar" disabled="PlanStatus" >ATIVAR</router-link> -->
                <button class="btn btn-primary btn-block ativar" @click="goPlano" :disabled="isBasic"  >ATIVAR </button>
                <!--  <a href="plano.html" class="btn btn-primary btn-block disabled">Aprovado</a> -->

            </div>

        </div>

    </div>

</template>

<script>
    
    import $ from "jquery"
    
    export default {
        name: "MemItem",
        props: {
            plano: Object,
            pk: Number,
            slug: String,
            planos: {},
            
        },
        data(){
            return{
                //isBasic: true,
                plan: [],
            }
        },
        computed:{
            isBasic(){
                if($.isEmptyObject(this.planos)){
                    if(this.plano.membership_type=="Basic"){
                        return false;
                    }else{
                        return true;
                    }
                }else{
                    let self = this;
                    for(let pl in this.planos){
                        self.plan.push(pl.membership_type)
                    }
                    if("Basic" in this.plan){
                        return false;
                    }else{
                        
                        if(this.plano.membership_type=="Basic"){
                        return false;
                    }else{
                        return true;
                    }
                        
                        
                        
                    }
                }
            },
        },
        methods: {
            goPlano(){
                this.$router.push('/pay/'+this.slug+'/'+this.pk+'/'+this.plano.id+'/')
            },
           
            
            
        },
        
    }
</script>