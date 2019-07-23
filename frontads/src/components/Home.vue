<template>
    <div>

        <nav-bar />

        <div id="main" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-8 offset-md-2 text-center">
                        <h2 style="text-transform: uppercase;">Seu anúncio ao alcance do Brasil.</h2>
                        <p></p>
                        
                        <button class="btn btn-outline-success btn-lg" data-toggle="modal" data-target="#loginModal" style="width: 9rem; margin-right: .3rem;">Login</button>
                        <button class="btn btn-outline-warning btn-lg" style="width: 10em; color: #fff;" data-toggle="modal" data-target="#registerModal">Inscreva-se</button>



                        <button class="btn btn-dark btn-block" data-toggle="modal" data-target="#newsletterModal" style="margin-top: 1rem;"> Receba nossa newsletter </button>

                    </div>

                </div>
            </div>

            <div id="seta" class="text-center">
                <a href="#about" class="page-scroll"><i class="fas fa-angle-down"></i></a>
            </div>

        </div>


        <div id="about">
            <div class="container">
                <div class="row text-center">
                    <div class="col-sm-12 col-md-8 offset-md-2">
                          <h4 id="who" style="font-weight: 600;">Sobre Nós</h4>


                </div>

                <div class="col-sm-12 col-md-8 offset-md-2 text-center" style="font-size: 1.5rem;">

                    <p style="padding: 2rem;">
                        Somos um site de maketing e publicidade que vai ajudar você a alavancar seu negócio. <br>

                        EroCiti é uma plataforma completa, ideal para quem trabalha no mercado do entretenimento adulto.
                        <br>

                    </p>
                    <p>
                        Mude a forma de se relacionar com seus clientes.
                    </p>

                </div>
                </div>
            </div>
        </div>


        <div id="newsletter" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6">
                        <h3> <i class="far fa-envelope"></i> Receba Novidades!</h3>
                    </div>

                    <div class="col-md-6">
                        <button class="btn btn-dark btn-block" data-toggle="modal" data-target="#newsletterModal" style="margin-bottom: .5rem;"> Receba nossa newsletter </button>

                    </div>
                </div>
            </div>
        </div>




        <div id="services">

            <div class="container">
                <div class="row text-center">

                    <div class="col-md-4 col-sm-12 ">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="fas fa-users fa-2x"></i>
                                </div>
                                <h4 class="card-title">Multi Perfis</h4>
                                <p class="card-text">Criação e ativação de vários perfis usando uma única conta de usuário.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="fas fa-id-card fa-2x"></i>
                                </div>
                                <h4 class="card-title">Identité</h4>
                                <p class="card-text">Ter seus perfis verificados usando os creditos disponiveis na sua conta.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="fas fa-share-alt-square fa-2x"></i>
                                </div>
                                <h4 class="card-title">Rede Sociais</h4>
                                <p class="card-text">Alcance maior visibilidade optando pelo serviço de publicidade em redes socias.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="fas fa-chart-line fa-2x"></i>
                                </div>
                                <h4 class="card-title">Statistik</h4>
                                <p class="card-text">Acompanhar em tempo real o tráfego do público acessando seus perfis.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="fas fa-headset fa-2x"></i>
                                </div>
                                <h4 class="card-title">Suporte Personalizado.</h4>
                                <p class="card-text">Solicitar o nosso suporte em caso de problemas ou informação sobre nossos serviços.</p>
                            </div>
                        </div>

                    </div>

                    <div class="col-md-4 col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-icon">
                                    <i class="far fa-handshake fa-2x"></i>
                                </div>
                                <h4 class="card-title">Co-working</h4>
                                <p class="card-text">Seja nosso parceiro, oferece seus produtos e serviços para nossos usuarios.</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>


        <div id="newsletter" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6">
                        <h3> <i class="far fa-envelope"></i> Receba Novidades!</h3>
                    </div>

                    <div class="col-md-6">
                        <button class="btn btn-dark btn-block" data-toggle="modal" data-target="#newsletterModal" style="margin-bottom: .5rem;"> Receba nossa newsletter </button>

                    </div>
                </div>
            </div>
        </div>


        <div id="divas">

            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-2 text-center">
                        <h2 style="margin-top: 5rem;">As divas</h2>
                        <p>As mais belas da cidade estão aqui. Faça parte você também.</p>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row" id="lightgallery">
                    <a class="col-lg-3 col-sm-6 col-xs-12 p-0 item" :href="img1">
                        <img :src="img1" alt="" class="img-fluid clients-btm-img">
                    </a>

                    <a :href="img2" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img2" alt="" class="img-fluid clients-btm-img">
                    </a>

                    <a :href="img3" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img3" alt="" class="img-fluid clients-btm-img">
                    </a>

                    <a :href="img4" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img4" alt="" class="img-fluid clients-btm-img">
                    </a>

                    <a :href="img5" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img5" alt="" class="img-fluid clients-btm-img">
                    </a>

                    <a :href="img6" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img6" alt="" class="img-fluid clients-btm-img">
                    </a>

                    <a :href="img7" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img7" alt="" class="img-fluid clients-btm-img">
                    </a>
                    <a :href="img8" class="col-lg-3 col-sm-6 col-xs-12 p-0 item">
                        <img :src="img8" alt="" class="img-fluid clients-btm-img">
                    </a>

                </div>
            </div>

        </div>

        <div id="newsletter" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6">
                        <h3> <i class="far fa-envelope"></i> Receba Novidades!</h3>
                    </div>

                    <div class="col-md-6">
                        <button class="btn btn-dark btn-block" data-toggle="modal" data-target="#newsletterModal" style="margin-bottom: .5rem;"> Receba nossa newsletter </button>

                    </div>
                </div>
            </div>
        </div>

        <!--

    <div id="clients">

        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="clients-section-heading text-center" style="padding: 4rem;">
                        <h2 class="wow fadeInUp animated">Depoiementos de clientes.</h2>
                        <p class="clients-padding-18 wow fadeInUp animated">A sua satisfação e seu successo é nossa razão de ser.</p>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="screenshot-slider owl-carousel owl-theme owl-loaded" id="owl-slider-top-menu">

                    <div class="owl-stage-outer">
                        <div class="owl-stage">

                            <div class="owl-item">
                                <div class="p-4 animated fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                                    <div class="bg-white clients-padding">
                                        <div class="media">
                                            
                                            <div class="media-body mt-4">
                                                <h5 class="clients-primary clients-owl-card mt-0">Elina Doe</h5>
                                                <p class="clients-owl-sub mt-0">Happy Client</p>
                                            </div>
                                        </div>
                                        <p class="clients-text-style mt-4">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam, eaque ipsa quae ab ”</p>
                                    </div>
                                </div>
                            </div>

                            <div class="owl-item">
                                <div class="p-4 animated fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                                    <div class="bg-white clients-padding">
                                        <div class="media"> <img src="img/avtar-one.png" alt="client" class="mr-3 rounded-circle">
                                            <div class="media-body mt-4">
                                                <h5 class="clients-primary clients-owl-card mt-0">Elina Doe</h5>
                                                <p class="clients-owl-sub mt-0">Happy Client</p>
                                            </div>
                                        </div>
                                        <p class="clients-text-style mt-4">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam, eaque ipsa quae ab ”</p>
                                    </div>
                                </div>
                            </div>

                            <div class="owl-item ">
                                <div class="p-4 animated fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                                    <div class="bg-white clients-padding">
                                        <div class="media"> <img src="img/avtar-one.png" alt="client" class="mr-3 rounded-circle">
                                            <div class="media-body mt-4">
                                                <h5 class="clients-primary clients-owl-card mt-0">Elina Doe</h5>
                                                <p class="clients-owl-sub mt-0">Happy Client</p>
                                            </div>
                                        </div>
                                        <p class="clients-text-style mt-4">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam, eaque ipsa quae ab ”</p>
                                    </div>
                                </div>
                            </div>

                            <div class="owl-item">
                                <div class="p-4 animated fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                                    <div class="bg-white clients-padding">
                                        <div class="media"> <img src="img/avtar-one.png" alt="client" class="mr-3 rounded-circle">
                                            <div class="media-body mt-4">
                                                <h5 class="clients-primary clients-owl-card mt-0">Elina Doe</h5>
                                                <p class="clients-owl-sub mt-0">Happy Client</p>
                                            </div>
                                        </div>
                                        <p class="clients-text-style mt-4">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam, eaque ipsa quae ab ”</p>
                                    </div>
                                </div>
                            </div>


                            <div class="owl-item">
                                <div class="p-4 animated fadeInUp wow" data-wow-duration="1500ms" data-wow-delay="400ms">
                                    <div class="bg-white clients-padding">
                                        <div class="media"> <img src="img/avtar-one.png" alt="client" class="mr-3 rounded-circle">
                                            <div class="media-body mt-4">
                                                <h5 class="clients-primary clients-owl-card mt-0">Elina Doe</h5>
                                                <p class="clients-owl-sub mt-0">Happy Client</p>
                                            </div>
                                        </div>
                                        <p class="clients-text-style mt-4">“ Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore laudantium totam rem aperiam, eaque ipsa quae ab ”</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    </div>

    -->

     <!--   <div id="partners">

            <div class="container">
                <div class="row">
                    <div class="col col-sm-12">
                        <div class="wb-section-heading text-center" style="padding: 4rem;">
                            <h3 class="wow fadeInUp animated animated">Clientes &amp; Parceiros</h3>
                            <h6 class="wb-padding-18 wow fadeInUp animated animated">Clientes e parceiros de confiança em ramos diversos.</h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-content-between flex-wrap">
                    <a href="" class="order-2 p-4 wb-patners m-3 mx-auto">
                        <img src="../assets/img/logo-one.png" alt="" class="img-fluid">
                    </a>
                </div>
            </div>


        </div>


        <div id="newsletter" class="d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-6">
                        <h3> <i class="far fa-envelope"></i> Receba Novidades!</h3>
                    </div>

                    <div class="col-md-6">
                        <button class="btn btn-dark btn-block" data-toggle="modal" data-target="#newsletterModal" style="margin-bottom: .5rem;"> Receba nossa newsletter </button>

                    </div>
                </div>
            </div>
        </div> -->






        <login />
        <register />
        <news-letter />







        <!-- scroll control -->
        <div id="topcontrol" class="topcontrol" title=""><i class="fa fa-arrow-up scrolltop"></i></div>

        <!-- End scroll control -->



    </div>
</template>

<script>
    import "../assets/js/script.js"
    import "../assets/js/scrolltopcontrol.js"
    import $ from "jquery"
    import NavBar from '@/components/NavBar.vue'
    import Login from '@/components/Login.vue'
    import Register from '@/components/Register.vue'
    import NewsLetter from '@/components/NewsLetter.vue'

    import img1 from '@/assets/imagen/list-1.jpg'
    import img2 from '@/assets/imagen/list-2.jpg'
    import img3 from '@/assets/imagen/list-3.jpg'
    import img4 from '@/assets/imagen/list-4.jpg'
    import img5 from '@/assets/imagen/list-5.jpg'
    import img6 from '@/assets/imagen/list-6.jpg'
    import img7 from '@/assets/imagen/list-7.jpg'
    import img8 from '@/assets/imagen/list-8.jpg'

    export default {
        name: 'Home',
        data() {
            return {
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
            }
        },
        components: {
            NavBar,
            Login,
            Register,
            NewsLetter
        },
        mounted() {
            $(document).ready(function() {
                $("#lightgallery").lightGallery({
                    download: false,
                });
            });
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>