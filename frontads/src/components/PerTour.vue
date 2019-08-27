<template>
    <div>
        <!-- <div class="v-step-0"></div> 
    <div class="v-step-1"></div>
    <div class="v-step-2"></div>
    <div class="v-step-3"></div>  -->

        <v-tour name="PerTour" :steps="steps" :options="myOptions"></v-tour>
    </div>
</template>

<script>
    export default {
        name: 'PerTour',
        data() {
            return {
                myOptions: {
                    useKeyboardNavigation: true,
                    labels: {
                        buttonSkip: 'Pular',
                        buttonPrevious: 'Anterior',
                        buttonNext: 'Próximo',
                        buttonStop: 'Terminar'
                    },


                },
                steps: [
                    
                    {
                        target: '.v-step-5',
                        content: `<strong>Veja ou edite</strong> os detalhes do seu anúncio!`,
                    },
                    {
                        target: '.v-step-6',
                        content: `Aqui, veja e edite todos os<strong> dados do seu anúncio</strong>!`,
                    },
                    {
                        target: '.v-step-7',
                        content: `Aqui, veja e edite os<strong> dados do seu anúncio</strong>!`,
                    },
                    {
                        target: '.v-step-8',
                        content: `Aqui, veja e edite os<strong> detalhes do seu anúncio</strong>!`,
                    },
                    {
                        target: '.v-step-9',
                        content: `Aqui, veja e edite os<strong> serviços oferecidos no seu anúncio</strong>!`,
                    },
                    {
                        target: '.v-step-10',
                        content: `Aqui, veja e edite os<strong> serviços especiais oferecidos no seu anúncio</strong>!`,
                    },
                    {
                        target: '.v-step-11',
                        content: `Aqui, veja e edite os<strong> valores cobrados no seu anúncio</strong>!`,
                    },
                    {
                        target: '.v-step-12',
                        content: `Aqui, veja e edite os<strong> locais de atendimentos</strong>!`,
                    },
                    {
                        target: '.v-step-13',
                        content: `Aqui, veja e adicione<strong> mais fotos ao seu anúncio</strong>!`,
                    },
                ]
            }
        },
        mounted() {
            setTimeout(() => {
                this.$tours['PerTour'].start()
            }, 1500)
        }
    }
</script>