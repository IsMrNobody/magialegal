<template>
  <v-sheet
    class="mx-auto transparent"
    max-width="1200"
  >
    <v-slide-group
      v-model="model"
      class="ma-2"
    >
      <v-slide-item
        v-for="(n, i) in photos"
        :key="i"
      >
        <v-card
          class="mx-auto pa-2 ml-5 mr-5 transparent"
          flat
          height="auto"
          max-width="400"
        >
          <v-img height="auto" :src="n.img"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      photos: [
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686774/DaniPotter/Cartas/02_rsfvjs.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/03_titghq.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/04_qsp0e9.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/05_g5hzzw.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/06_wtl2qx.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/07_ojgoaz.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/08_ynlspd.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/09_bectpp.png"
        },
        {
          img: "https://res.cloudinary.com/dku13l2ep/image/upload/v1674686863/DaniPotter/Cartas/10_q9w1bn.png"
        }
      ]
    }),
  }
</script>

