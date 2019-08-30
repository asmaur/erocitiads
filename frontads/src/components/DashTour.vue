<template>
    <div>
        <!-- <div class="v-step-0"></div> 
    <div class="v-step-1"></div>
    <div class="v-step-2"></div>
    <div class="v-step-3"></div>  -->

        <v-tour name="DashTour" :steps="steps" :options="myOptions"></v-tour>
    </div>
</template>

<script>
    export default {
        name: 'DashTour',
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
                    /*{
                        target: '.v-step-0', // We're using document.querySelector() under the hood
                        content: `Bem-vinda a sua página inicial <br> <strong>Aqui você volta ao painel de controle!`,
                        params: {
                            placement: 'top'
                        }

                    },
                    {
                        target: '.v-step-1',
                        content: 'Clique aqui para criar um anúncio!'
                    },
                    {
                        target: '.v-step-2',
                        content: `Ver detalhes da sua conta. <br> <strong>Editar conta</strong>, <strong>Comprar crédito</strong> ...`,
                    },
                    {
                        target: '.v-step-3',
                        content: `Veja os anúncios na nossa página.<br> <strong>Veja mais divas e junte-se a nós!</strong>`,
                    },
                    {
                        target: '.v-step-4',
                        content: `Aqui aparece seus anúncios, <br> <strong>Lembre-se pode criar quantos anúncios quiser !`,
                    },
                    {
                        target: '.v-step-5',
                        content: `<strong>Veja ou edite</strong> os dados e detalhes do seu anúncio!`,
                    },
                        {
                        target: '.v-step-6',
                        content: `<strong>Veja os planos disponíveis. <br></strong> Ative seu plano e coloque seu anúncio no ar!`,
                    },
                        {
                        target: '.v-step-7',
                        content: `<strong>Veja as estatística de clics e views</strong> no seu anúncio!`,
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
                    },*/
                    
                ]
            }
        },
       /* mounted() {
            setTimeout(() => {
                //this.$tours['DashTour'].start()
            }, 1500)
        }*/
    }
</script>