<template>
    <div>
        <div id="contact" class="justify-content-center align-items-center">

            <div class="container">
                <div class="row">


                    <div class="col-md-12 mt-4 text-center">

                        <h3 class=" wow fadeInUp animated animated" style="margin-bottom: .4rem;">Nossos contatos</h3>
                        
                        <a href="mailto:contact@erociti.com" style="margin:.5rem;">contact@erociti.com</a>
                        <br>

                    </div>

                    <div class="col-md-4 offset-md-4 text-center" style="">
                        <a href="https://wa.me/555198679552" style="margin: .4rem;" target="_blank">
                            <i class="fab fa-whatsapp fa-3x"></i>
                        </a>
                        <a href="https://twitter.com/erociti" style="margin: .4rem;" target="_blank">
                            <i class="fab fa-twitter fa-3x"></i>
                        </a>
                        <a href="https://www.instagram.com/erociti_oficial/" style="margin: .4rem;" target="_blank">
                            <i class="fab fa-instagram fa-3x"></i>
                        </a>
                    </div>


                </div>
            </div>

        </div>
        <div id="footer">
            <div class="container">
               <div class="row">
               
               <div class="col-sm-12 text-center">
                <ul class="footer-navbar">

                    <li> <router-link to="/politica-de-privacidade"> Política de privacidade </router-link> </li>
                    <li> <router-link to="/termo-de-uso" >Termo &amp; Condições de Uso</router-link> </li>
                    <li> <a href="https://erociti.com" target="_blank">Ir Para erociti.com</a> </li>
                </ul>
    </div>
                <div class="col-sm-12 col-md-6 text-left p-3 copy-text">
                    EroCiti Group. &copy; {{ano}} | Todos os direitos reservados. 
                </div>
                <div class="col-sm-12 col-md-6 p-3 text-right">
                    <a href="https://wanubit.com" target="_blank">
                    <span> Design by </span>
                        <img src="../assets/imagen/wanu.png" class="fluid-img" style="height: 20px; width: 20px; margin-left: 1rem;"> Wanubit
                    </a>
                </div>
                
            </div>
    </div>
        </div>

    </div>



</template>

<script>
    // @ is an alias to /src


    export default {
        name: 'Footer',
        computed: {
            ano: function() {
                var dt = new Date()
                return dt.getFullYear()
            }
        },
        components: {

        }
    }
</script>