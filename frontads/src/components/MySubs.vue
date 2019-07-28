<template>

    <div class="col-md-4" v-if="plano">
        <div class="card">
            <div class="card-header">
                <h3>{{plano.membership.name}}</h3>

            </div>

            <div class="card-body card-list">

                <p>
                    <small>Esse plano é valido até <strong>{{convertTime(plano.end_date)}}.</strong></small>
                </p>
            </div>

            <div class="card-footer">
                <button class="btn btn-primary btn-block ativar" @click="renovarPlano" :disabled="plano.membership.unpaid">Renovar </button>
                <button class="btn btn-primary btn-block disabled">Ativo</button>
            </div>
        </div>
    </div>

</template>


<script>
    import ax from '../api.js'

    export default {
        name: "MySubs",

        props: {
            plano: {},
        },

        data() {
            return {
                datus: {},
            }
        },

        methods: {
            renovarPlano() {
                this.datus.code = this.plano.code;
                this.datus.planoId = this.plano.membership.id;

                ax.post("pay/renovar/", this.datus)
                    .then(response => {
                        this.$noty.success(response.data.message);
                        setTimeout(() => {
                            location.reload();
                        }, 3000);
                    })
                    .catch(error => {
                        this.$noty.error(error.response.data.message);
                    })

            },

            convertTime(UNIX_timestamp) {
                var a = new Date(UNIX_timestamp);
                var months = ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();

                var time = date + ' ' + month + ' ' + year + ' ';
                return time;
            },

        },

    }
</script>