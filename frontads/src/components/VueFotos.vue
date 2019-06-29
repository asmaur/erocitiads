<template>
  <div class="card">
    <div class="card-header" id="headingFive">
      <h5 class="mb-0">
        <button
          class="btn btn-link btn-block collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >Fotos</button>
      </h5>
    </div>
    <div
      id="collapseFive"
      class="collapse"
      aria-labelledby="headingFive"
      data-parent="#accordionExample"
    >
      <div class="card-body">
        <form>
          <fieldset disabled>
            <div>
              <label style="font-size: 14px;">
                <span style="color:navy;font-weight:bold">Instrução :</span>
              </label>
              <ul>
                <li>arquivos aceitos (jpg, png, jpeg)</li>
                <li>Numero maximo de arquivos de 25 com 500 KB cada</li>
              </ul>
            </div>
          </fieldset>

        <div class="modal-footer" style="display: flex; justify-content: space-between;">
            <router-link
              :to="'/e/i/'+slug+'/'+pk+'/'"
              class="btn btn-primary entrar"
            >VER FOTOS</router-link>
          </div> 

          <div class="container">
            <div class="row">
              <output id="Filelist"></output>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueFotos",
  props:{
    slug: String,
    pk: Number,
  },
};
</script>

