<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h1 class="text-center text-2xl font-semibold text-current/90">
        statistics
      </h1>
    </div>

    <div
      class="table-b bg-current/10 p-8 overflow-x-auto m-3 lg:flex items-center justify-center flex-wrap"
    >
      <div class="lg:w-[60%]">
        <ChartBar />
      </div>
      <div class="lg:w-[40%] mt-10">
        <RadialBar
          :nativeTokens="nativeTokens"
          :tvlTokens="tvlTokens"
          :tvl="tvl"
        />
      </div>
    </div>

    <div class="table-b bg-current/10 p-8 overflow-x-auto m-3">
      <div class="flex justify-between">
        <h1 class="text-current text-xl">Tokens</h1>
        <TableFiters @filterEvent="filterFnc" />
      </div>

      <table class="table-auto w-full mt-10">
        <TableHeader />
        <template
          v-for="token in tokens"
          :key="token.id"
        >
          <TableItem :token="token" />
        </template>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import RadialBar from '../../components/statistics/RadialBar.vue'
import ChartBar from '../../components/statistics/ChartBar.vue'
import TableHeader from '../../components/table/TableHeader.vue'
import TableItem from '../../components/table/TableItem.vue'
import TableFiters from '../../components/table/TableFiters.vue'

const fetchData = ref([])
const tvl = ref(null)

let tokens = ref([])
let nativeTokens = ref([])
let tvlTokens = ref([])

const filterFnc = (value) => {
  tokens.value = []
  fetchData.value.rows.forEach((t) => {
    value >= t.tvlp ? tokens.value.push(t) : false
  })
}

onBeforeMount(async () => {
  await fetch('https://research-api.toscale.io/research/list-blockchains')
    .then((res) => res.json())
    .then((data) => {
      fetchData.value = data
      tokens.value = data.rows
    })

  tvl.value = tokens.value.reduce((total, token) => total + token.tvl, 0)

  tokens.value.map((token) => {
    token.tvlp = ((token.tvl * 100) / tvl.value).toFixed(2)
    nativeTokens.value.push(token.nativeToken)
    tvlTokens.value.push(token.tvlp)
  })
})
</script>
