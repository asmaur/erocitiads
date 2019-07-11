<template>

    <div id="dash-app">


        <div id="dash-header" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2>DashBoard</h2>

                    </div>

                </div>
            </div>

        </div>

        <div id="dash">

            <div class="container">

                <div class="row">


                    <PerItem v-for="item in perfis" v-bind:key="item.id" :item="item" />



                </div>


            </div>


        </div>





    </div>

</template>

<script>
    // @ is an alias to /src
    import PerItem from '@/components/PerItem.vue'
    import ax from '../api.js'
    
    export default {
        name: 'dashboard',
        components: {
            PerItem,

        },
        data() {
            return {

                perfis: {},
                //agente: {},
            }
        },
        methods: {
            getModelos() {


                ax.get('ag/' + this.$route.params.id + '/perfis/', )
                    .then(response => {
                        this.perfis = response.data;
                    })
                    .catch();
            },

        },

        mounted() {

            this.getModelos();

        },

    }
</script>