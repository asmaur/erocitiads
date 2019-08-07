<template>

    <div id="look">






        <div id="diamond-big" class="">

            <div class="owl-carousel owl-theme">



                <div class="item ">
                    <div class="wiz-overlay">

                        <div class="wiz-diamond">
                            <button class="btn btn-warning">
                                <i class="far fa-gem"></i>

                            </button>
                        </div>
                        <div class="wiz-vip">
                            <button class="btn btn-danger">
                                <i class="far fa-star"></i>
                                <span>VIP</span>
                            </button>
                        </div>

                        <div class="container">
                            <div class="row">

                                <div class="col-md-8 offset-md-2 text-center">
                                    <div class="wiz-diamond-content">
                                        <!-- <div class="wiz-diamond">
                                        <button class="btn btn-warning">
                                           <i class="far fa-gem"></i>
                                            
                                        </button>
                                    </div> 
                                    <div class="wiz-vip" >
                                        <button class="btn btn-danger">
                                           <i class="far fa-star"></i>
                                             <span>VIP</span>
                                        </button>
                                    </div> -->

                                        <div class="wiz-item-info">
                                            <h2>Nome Sobrenome (PLANO DIAMOND)</h2>
                                            
                                            <em>idade: 00 anos</em> <br>
                                            <em>Cidade: Porto Alegre - <b style="text-transform: uppercase;">RS</b> </em> <br>

                                        </div>
                                        <div class="wiz-item-description">
                                            <p style="text-transform: uppercase;">
                                                Seção exclusiva para <strong>Plano DIAMOND </strong>, capa da sua cidade, com visualização privilegiada.
                                            </p>
                                        </div>

                                        <div class="wiz-item-contact">
                                            <a href="" target="_blank">
                                                <i class="fas fa-phone fa-3x"></i>
                                            </a>
                                            <a href="'https://api.whatsapp.com/send" target="_blank">
                                                <i class="fab fa-whatsapp fa-3x"></i>

                                            </a>


                                            <a href="https://www.instagram.com/trexengenharia/" target="_blank">
                                                <i class="fab fa-twitter fa-3x"></i>

                                            </a>
                                            <a href="https://www.instagram.com/trexengenharia/" target="_blank">
                                                <i class="fab fa-instagram fa-3x"></i>

                                            </a>
                                        </div>

                                        <a href="" class="btn btn-primary btn-block view-profile" style="margin-top: .3rem;">Ver perfil</a>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <img :src="img1" class="img-fluid" alt="">

                </div>







            </div>
        </div>



        <!-- navbar --->
        <header class="header" style="padding-top:.5rem;">
            <nav class="navbar navbar-expand-lg">
                <a href="" class="navbar-brand">EroCiti</a>

                <button class="wiz-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown" style="margin-left: 1.5rem;">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorias
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="">Mulheres</a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">Homens</a>
                                <div class="dropdown-divider"></div>
                                <a href="" class="dropdown-item">Transex</a>
                            </div>
                        </li>
                    </ul>


                    <ul class="navbar-nav">
                        <li class="nav-item">

                            <form class="form-inline wiz-search col-12" @submit.prevent="search">
                                <div class="input-group" style="width: 100%;">
                                    <input type="text" class="form-control" name="q" placeholder="Entre um nome" aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <select class="form-control col-4" id="exampleFormControlSelect1" name="cq">
                                        <option value="mulheres">Mulheres</option>
                                        <option value="homens">Homens</option>
                                        <option value="transex">Transex</option>

                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-warning" type="submit">Pesquisar</button>
                                    </div>
                                </div>


                            </form>


                        </li>

                        <li class="nav-item text-center" style="margin-left: 1.5rem; border: 2px solid #fff; margin-top: -.2rem;">
                            <a href="https://www.ads.erociti.com" target="_blank" class="nav-link">Anuncie !</a>
                        </li>

                    </ul>



                </div>
            </nav>
        </header>

        <!-- end navbar -->

        <div id="local" class="d-flex align-items-center justify-content-center">

            <div class="container">
                <div class="row justify-content-around text-center">
                    <div class="col-md-3">
                        <h4 style="margin-top: .5rem;">Localização</h4>
                    </div>
                    <div class="col-md-4">
                        <button class="btn btn-primary btn-block" data-toggle="modal" data-target="#localize">
                            <i class="fas fa-map-marker-alt"></i>

                            <b> Escolhe sua cidade </b>
                        </button>
                    </div>

                </div>
                <hr class="wiz-divider">
            </div>

        </div>




        <!-- diamond -->
        <div id="tops">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <hr style="height: 1rem; color:#000;">
                        <h4 class="display-6" style="margin:.5rem;">Seção Diamonds</h4>
                        <hr style="height: 1rem; color:#000;">
                    </div>
                </div>

                <div class="row">


                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">
                                <div class="wiz-diamond" style="position: absolute; top: 2px;">
                                    <button class="btn btn-warning">
                                        <i class="far fa-gem"></i>

                                        <!-- <i class="far fa-gem fa-x"></i> -->
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>MAIS DIAMOND (PLANO DIAMOND)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">
                                <div class="wiz-diamond" style="position: absolute; top: 2px;">
                                    <button class="btn btn-warning">
                                        <i class="far fa-gem"></i>

                                        <!-- <i class="far fa-gem fa-x"></i> -->
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO DIAMOND)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">
                                <div class="wiz-diamond" style="position: absolute; top: 2px;">
                                    <button class="btn btn-warning">
                                        <i class="far fa-gem"></i>

                                        <!-- <i class="far fa-gem fa-x"></i> -->
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO DIAMOND)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>



                </div>



            </div>

        </div>


        <!-- destak -->
        <div id="tops">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <hr style="height: 1rem; color:#000;">
                        <h4 class="display-6" style="margin:.5rem;">Seção Destaques</h4>
                        <hr style="height: 1rem; color:#000;">
                    </div>
                </div>

                <div class="row">

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">

                                <div class="wiz-diamond" style="position: absolute; top: 2.5rem;">
                                    <button class="btn btn-warning">
                                        <i class="fas fa-feather-alt"></i>
                                        <!-- <i class="fas fa-feather-alt"></i> -->
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>SEÇAO DESTAQUE (PLANO DESTAQUE)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">

                                <div class="wiz-diamond" style="position: absolute; top: 2.5rem;">
                                    <button class="btn btn-warning">
                                        <i class="fas fa-feather-alt"></i>
                                        <!-- <i class="fas fa-feather-alt"></i> -->
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO DESTAQUE)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">

                                <div class="wiz-diamond" style="position: absolute; top: 2.5rem;">
                                    <button class="btn btn-warning">
                                        <i class="fas fa-feather-alt"></i>
                                        <!-- <i class="fas fa-feather-alt"></i> -->
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO DESTAQUE)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>



                </div>
            </div>

        </div>


        <!-- tops -->
        <div id="tops">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">
                        <hr style="height: 1rem; color:#000;">
                        <h4 class="display-6" style="margin:.5rem;">Seção TOPs</h4>
                        <hr style="height: 1rem; color:#000;">
                    </div>
                </div>

                <div class="row">

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">

                                <div class="wiz-vip" style="position: absolute; top: 2.5rem; right: 0px;">
                                    <button class="btn btn-danger">
                                        <i class="fab fa-studiovinari"></i>
                                        <!-- <i class="fab fa-studiovinari"></i> --> <span>TOP</span>
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO TOP)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">

                                <div class="wiz-vip" style="position: absolute; top: 2.5rem; right: 0px;">
                                    <button class="btn btn-danger">
                                        <i class="fab fa-studiovinari"></i>
                                        <!-- <i class="fab fa-studiovinari"></i> --> <span>TOP</span>
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO TOP)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>


                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">

                                <div class="wiz-vip" style="position: absolute; top: 2.5rem; right: 0px;">
                                    <button class="btn btn-danger">
                                        <i class="fab fa-studiovinari"></i>
                                        <!-- <i class="fab fa-studiovinari"></i> --> <span>TOP</span>
                                    </button>
                                </div>

                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (PLANO TOP)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>



                </div>



            </div>

        </div>


        <!-- basicos -->

        <div id="tops" style="margin-bottom: 2rem;">

            <div class="container">
                <div class="row">
                    <div class="col-md-6 offset-md-3 text-center">

                        <hr style="height: 1rem; color:#000;">
                        <h4 class="display-6" style="margin: .5rem;">Acompanhantes</h4>
                        <hr style="height: 1rem; color:#000;">
                    </div>
                </div>

                <div class="row">

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">


                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (MAIS ACOMPANHANTES)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">


                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (MAIS ACOMPANHANTES)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>

                    <div class="col-sm-4">
                        <a href="" class="wiz-card" style="margin-top: 1rem;">
                            <img class="img-fluid" src="../assets/imagen/look.jpg" alt="">

                            <div class="wiz-header d-flex justify-content-between">


                            </div>
                            <div class="wiz-footer">
                                <h4>Nome Sobrenome (MAIS ACOMPANHANTES)</h4>
                                <em>Idade: 00 anos</em> <br>
                                <em>Porto Alegre - <b style="text-transform: uppercase;">RS,</b> Brasil</em>
                            </div>
                        </a>
                    </div>



                </div>



            </div>


        </div>










    </div>


</template>


<script>
    import $ from 'jquery'
    import img1 from '@/assets/imagen/looki.png'

    export default {
        name: "VueSecoes",
        data() {
            return {
                img1,
            }
        },

        updated() {
            $(document).ready(function() {
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    dots: true,
                    nav: false,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    responsive: {
                        0: {
                            items: 1,
                            dots: true,
                        },
                        // breakpoint from 480 up
                        480: {
                            items: 1,
                            dots: true,
                        },
                        // breakpoint from 768 up
                        768: {
                            items: 1,
                            dots: true,
                        },
                        1000: {
                            items: 1,
                            dots: true,
                        },
                        1440: {
                            items: 1,
                            dots: true,
                        },
                        2560: {
                            items: 1,
                            dots: true,
                        },

                    }
                })
            });

        },


    }
</script>


<style scoped="true">
    @import '../assets/css/wizini.css';
    /* @import '../assets/css/style2.css'; */

    #look {
        pointer-events: none;

    }
</style>