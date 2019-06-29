

<script>
import { Line } from "vue-chartjs";

export default {
  name: "MesGraph",
  extends: Line,
  props: {
    label: String,

    chartData: {
      type: Array,// | Object,
      required: false
    },
    chartLabels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      //month: "",
      datacollection: {
        labels: this.chartLabels,
        datasets: [
          {
            label: this.label,
            backgroundColor: "rgb(233, 84, 32,.3)", //'#f87979',
            pointBackgroundColor: "#345456",
            pointRadius: 5,
            data: this.chartData,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ]
          /*  xAxes: [ {
              gridLines: {
                display: false
              }
            }]*/
        }
        /*  legend: {
            display: false
          },*/
      }
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  }
};
</script>

<style scoped>
canvas {
  height: 30rem !important;
}
</style>

