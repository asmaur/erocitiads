<template>
  <router-link :to="'/profile/'+item.slug+'/'+item.pk+'/'" class="col-md-4">
    <div class="boads-item">
      <img class="img-fluid" :src="item.capa" alt>
      <div class="boards-overlay">
        <h2>{{item.nome}} {{item.sobrenome}}</h2>

        <div class="boads-info">
          <div class="ativo"></div>
          <div class="inativo"></div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
    name: "PerItem",
    props:{
      item: Object,
    }
}
</script>