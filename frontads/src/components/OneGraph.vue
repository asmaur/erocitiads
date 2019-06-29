

<script>


import { Bar } from 'vue-chartjs'

export default {
    
    name: "OneGraph",
    extends: Bar,
    props:{
        views: {},
        //valu: 40,
    },
    data() {
        return{
    
      datacollection: {
        labels: ['January', 'Mars', 'Abril'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [50, 10, 30,],
          }
        ]
      },
      options: {
          responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
        }
    }
       
    },
    mounted () {
    this.renderChart(this.datacollection, this.options);
  },

}
</script>
