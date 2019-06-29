<template>
    <div id="app">

        <router-view :key="$route.fullPath" />


        <Footer />
    </div>
</template>


<script>
    import Footer from '@/components/Footer.vue'
    export default {
        name: "App",
        components: {
            Footer,
        },

        mounted() {
            const dict = {
                custom: {
                    email: {
                        required: 'O campo email é obrigatório.'
                    },
                    name: {
                        required: () => 'O Campo nome de usuario é obrigatório'
                    },
                    file: {
                        required: () => 'Selecione um arquivo de imagem',
                        
                    }
                }
            };
            this.$validator.localize("pt-br", dict)
        },


    }
</script>