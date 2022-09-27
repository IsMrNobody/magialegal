<template>
  <v-row justify="space-around">
    <v-checkbox
    v-model="selected"
    label="Cash"
    value="Cash"
    @click="setPayment()"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Paypal"
      value="Paypal"
      @click="setPayment()"
    ></v-checkbox>
    <v-card class="my-auto pa-2" :class="paymentSelet === 'Cash' ? 'green' : 'blue'">
      <!-- <p class="my-auto">{{ selected }}</p> -->
      <v-icon v-if="paymentSelet === 'Cash'">mdi-cash</v-icon>
      <v-img v-else width="20" height="20" src="https://cdn-icons-png.flaticon.com/512/888/888871.png?w=360"></v-img>
    </v-card>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      selected: 'Cash',
    }
  },
  computed: {
    paymentSelet() {
      return this.$store.state.carrito.selectedPayment
    }
  },
  created() {
    this.setPayment('Cash')
  },
  methods: {
    setPayment() {
      this.$store.dispatch('carrito/setPayment', this.selected)
    }
  }
}
</script>
