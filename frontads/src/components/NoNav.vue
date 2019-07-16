<template>

    <div>

        <nav class="navbar navbar-expand fixed-top nav-one">

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a id="login" href="#" data-toggle="modal" data-target="#loginModal" style="margin-right: 1rem;">Login</a>
                </li>
                <li class="nav-item">
                    <a id="registrar" data-toggle="modal" data-target="#registerModal" href="#">Inscreva-se</a>
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

        </nav>
        
        <Login />

        <Register />

    </div>

</template>


<script>
    
    import Login from '@/components/Login.vue'
    import Register from '@/components/Register.vue'
    
    export default {
        name: "NoNav",
        components:{
            Register,
            Login,
        }
    }
</script>