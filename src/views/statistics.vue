<template>
  <Chart :history="history" :avg="avg" />
</template>

<script>
import Chart from "../components/chart.vue";
import { bitcoinService } from '../services/bitcoin.service';
export default {
    data(){
        return{
            history:null,
            avg:null
        }
    },
    async created(){
        const history = await bitcoinService.getMarketPriceHistory()
        const avgBlock = await bitcoinService.getAvgBlockSize()
        this.history = history.data
        this.avg = avgBlock.data
    },
    components: { Chart }
}
</script>

<style>

</style>