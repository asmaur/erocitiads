<template>

    <div class="card text-white bg-dark mb-3">
        <div class="card-header bg-dark">
            <h6>Crédito dispónivel na sua conta </h6>
        </div>
        <div class="card-body" style="display: flex; align-items: center; justify-content: space-between;">

            <div>
                <h4 style="text-transform: uppercase;">saldo</h4>
            </div>

            <div id="credito-valor" class="text-center">
                <p>
                    <span>R${{ formatPrice(coins) }}</span>
                </p>
            </div>

        </div>

    </div>

</template>


<script>
    
    import ax from '../api.js'; 
    
    export default {
        name: "MyCoins",
        
        data(){
            return{
                coins: null,
            }
        },
        methods:{
            getCoins(){
                ax.get("pay/"+this.$route.params.id+"/getbalance/",)
                    .then(response => {
                        this.coins = response.data.amount;
                })
            },
            formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }
            
        },
        
        created(){
            this.getCoins();
        }
    }
</script>