<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h3>VIP  {{pk}}</h3>
        <!--<div class="price">
                                            <span class="devise-symbol">R$</span> <span class="plan-amount">50,00</span><span class="plan-period">/mês</span>
        </div>-->
      </div>

      <div class="card-body card-list">
       <!-- <ul>
          <li>kjshjd kjasgdjkgs</li>
          <li>kjasgdjkgs</li>
          <li>kjasgdjkgs</li>
          <li>kjasgdjkgs</li>
          <li>kjasgdjkgs</li>
        </ul>

        <p>
          <small>Esse plano é valido por 7 dias.</small>
        </p>
        <p>
          <small>valido até dia 23/12/12.</small>
        </p> -->
      </div> 

      <div class="card-footer">
        <a href="plano.html" class="btn btn-primary btn-block ativar">SOLICITAR SEU SELO VIP</a>
        <a href="plano.html" class="btn btn-primary btn-block pendente">Pendente</a>
        <a href="plano.html" class="btn btn-primary btn-block disabled">Aprovado</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "VueVip",
    props:{
        pk: Number,
    },
}
</script>
