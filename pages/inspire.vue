<template>
  <div>
    <Banner />
    <v-container>
      <h1 class="ma-5">Tortas</h1>
      <v-row>
        <v-col v-for="(pro, i) in tortas" :key="i">
          <Product />
        </v-col>
      </v-row>

      <v-col class="mt-5">
        <h1 class="ma-5">Postres Frios</h1>
        <v-row>
          <v-col v-for="(pro, i) in postres" :key="i">
            <Product />
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Banner from '@/components/tienda/Banner'
import Product from '@/components/tienda/Product'
export default {
  components: {
    Banner,
    Product
  },
  data() {
    return {
      tortas: [
        {
          name: 1
        },
        {
          name: 2
        },
        {
          name: 3
        }
      ],
      postres: [
        {
          name: 1,
        },
        {
          name: 2
        },
        {
          name: 3
        }
      ]
    }
  },
}
</script>
