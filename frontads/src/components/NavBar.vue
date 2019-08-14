<template>
    
    <div>
        
        
    <nav class="navbar navbar-expand fixed-top nav-one">

        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a id="login" href="#" data-toggle="modal" data-target="#loginModal" style="margin-right: 1rem;">Login</a>
            </li>
            <li class="nav-item">
                <a id="registrar" data-toggle="modal" data-target="#registerModal" href="#">Increva-se</a>
            </li>
        </ul>

    </nav>


    <nav class="navbar navbar-expand-lg  fixed-top nav-two">
        <a class="navbar-brand" href="/">
            <!-- <img class="mb-3 img-fluid" src="img/Logo.png" alt="logo-image"> -->
            EroCiti ads</a>
        <button class="navbar-toggler wiz-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#main">início</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#about">Sobre</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#services">Serviços</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#divas">Divas</a>
                </li>
             <!--   <li class="nav-item">
                    <a class="nav-link page-scroll" href="#clients">Clientes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="#partners">Parcerias</a>
                </li> -->
                <li class="nav-item">
                    <router-link class="nav-link page-scroll" to="secoes" target="_blank">Seções</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link page-scroll" href="https://erociti.com" target="_blank">Erociti.com</a>
                </li>
            </ul>

        </div>
    </nav>
        
        
    </div>
    
</template>


<script>
    
    
    
    export default{
        name: "NavBar",
        
    }

</script>