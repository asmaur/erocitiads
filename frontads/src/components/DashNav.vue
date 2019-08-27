<template>

    <div>
        <nav class="navbar navbar-expand-lg wiz-dash-nav">

            <router-link class="navbar-brand v-step-0" :to="'/dash/'+agente.id+'/'">
                <i class="fas fa-home fa-x "></i> INÍCIO
                <!-- EroCiti ads -->
            </router-link>
            <button class="navbar-toggler wiz-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item v-step-1" style="margin: 0 1px 1.2px 0;">
                        <a class="nav-link btn btn-outline-warning" data-toggle="modal" data-target="#criar-perfil">
                            <i class="fa fa-plus"></i> ANÚNCIO
                            <!--perfil -->
                        </a>
                    </li>

                    <li class="nav-item dropdown v-step-2" style="margin: 0 1px 1.2px 0;">
                        <a class="nav-link btn btn-outline-warning dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{user.username}}</a>
                        <div class="dropdown-menu dropdown-menu-right text-center" aria-labelledby="navbarDropdown">

                            <router-link class="dropdown-item" :to="'/users/coins/'+user.id+'/'">Meus Créditos</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link class="dropdown-item" :to="'/users/account/'+user.id+'/'">Ver Conta</router-link>
                            <div class="dropdown-divider"></div>

                            <router-link class="dropdown-item" :to="'/users/e/account/'+user.id+'/'">Editar Conta</router-link>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item btn" href="#" @click="logout">Sair</button>
                        </div>
                    </li>
                    <li class="nav-item v-step-3">
                        <a class="nav-link btn btn-outline-warning" href="https://erociti.com" target="_blank">VER DIVAS</a>
                    </li>

                </ul>
            </div>
        </nav>

        <NewPerfil :pk="agente.id" />
        
        
        
        
        
                
        
        
    </div>
</template>

<script>
    // @ is an alias to /src
    //import { mapState, mapActions } from 'vuex'

    import NewPerfil from "@/components/NewPerfil.vue";
    //import DashTour from '@/components/DashTour.vue'

    export default {
        name: "DashNav",

        data() {
            return {
                //pk: null,
                user: {},
                agente: {},


              

            }
        },
        computed: {

        },
        components: {
            NewPerfil,
            
        },
        methods: {

            getLocalData() {
                this.agente = JSON.parse(localStorage.getItem("agente"));
                this.user = JSON.parse(localStorage.getItem("user"));
            },
            logout() {
                localStorage.clear();
                this.$noty.warning("Você saiu da sua conta ..!");
                setTimeout(() => {
                    this.$router.push("/")
                }, 100);
            },
        },
        created() {
            this.getLocalData();

        },

    };
</script>