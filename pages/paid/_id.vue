<template>
  <div v-if="param">
    <h1>Pago completado, Gracias por tu compra</h1>
    <p>ID compra: {{ param }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    param() {
      return this.$route.params.id
    }
  }
}
</script>

<style>

</style>