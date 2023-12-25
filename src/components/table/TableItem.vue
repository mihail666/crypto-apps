<template>
  <tbody>
    <tr class="border-b border-b-darkblue tr">
      <td class="px-4 py-6 text-center text-current">{{ token.order }}</td>
      <td
        class="px-4 py-6 text-center text-current flex items-center justify-start gap-5"
      >
        <img
          :src="`/images/Table/${token.nativeToken}.svg`"
          :alt="token.name"
          height="50"
          width="50"
        />{{ token.name }}
      </td>
      <td class="px-4 py-6 text-center text-current">{{ token.nativeToken }}</td>
      <td class="px-4 py-6 text-center text-current">{{ (token.tvl / 1000000).toFixed(2) }} B</td>
      <td class="px-4 py-6 text-center text-current">{{ token.tvlp }}%</td>
    </tr>
  </tbody>
</template>

<script setup>
import { toRefs } from 'vue'
const props = defineProps({ token: Object })
const { token } = toRefs(props)
</script>

<style lang="scss" scoped></style>
