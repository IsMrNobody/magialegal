<template>
  <div class="text-center">
    <v-card max-width="600" class="mx-auto secondary">
      <v-card-actions>
        <v-card-subtitle>
          Pay With: <span class="white--text">{{ paymentSelet.type }}</span>
        </v-card-subtitle>
        <v-spacer></v-spacer>
        <v-card-subtitle>
          Total order:
        </v-card-subtitle>
        <h2>
          $ {{ totalOrder }}
        </h2>
      </v-card-actions>
      <p class="grey--text">Payment address:</p>
      <p class="primary--text text-h5 text-decoration-underline">{{ paymentSelet.email }}</p>
      <v-card-actions>
        <v-btn v-if="paymentSelet.type === 'Paypal'" color="primary" outlined block @click="paypal()">
          Pay with {{ paymentSelet.type }}
        </v-btn>
        <v-row v-else class="primary my-auto">
          <p class="mx-auto my-auto mt-2 mb-2 secondary--text">!Thank you for your purchase, <br /> we will contact you soon!</p>
        </v-row>
      </v-card-actions>
      <v-col>
        <v-btn class="mt-5" small text @click="check">check order</v-btn>
      </v-col>
    </v-card>
    <!-- <h1>Gracias por tu compra, en breve estaremos en contato contigo!</h1> -->
  </div>
</template>

<script>
export default {
  props: {
    total: {
     type: String,
     default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {
    paymentSelet() {
      return this.$store.state.carrito.selectedPayment
    },
    totalOrder() {
      return this.$store.state.carrito.total
    },
    orderId() {
      return this.$store.state.carrito.orderId
    }
  },
  methods: {
    check() {
      this.$router.push(`/paid/${this.orderId}`)
      this.$store.commit('carrito/setDialog', false)
      this.$store.commit('carrito/resetCar')
    },
    paypal() {
      this.$store.dispatch('carrito/paypal')
    }
  }
}
</script>

<style>

</style>