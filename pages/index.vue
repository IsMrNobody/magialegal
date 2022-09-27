<template>
  <div>
    <v-img class="banner" src="https://firebasestorage.googleapis.com/v0/b/ssr-webicultores.appspot.com/o/sweet-blessing%2Fbanner.png?alt=media&token=06b59d56-c291-410c-9c94-3227ed6896ed">
      <v-card class="fix transparent" flat>
        <!-- <h1>The Taste of Your Celebrations</h1> -->
        <img width="90%" src="/logo.png" alt="">
        <h2 class="beihgColor spaci">{{ merchant.name }}</h2>
        <v-btn color="#EAAC9D" class="mt-5">See More</v-btn>
      </v-card>
    </v-img>
    <v-container>
      <div class="text-center pad">
          <v-card max-width="700" flat class="transparent mx-auto">
            <h2 class="siz">Custom-made Cake</h2>
            <p class="display-1">Guests of your holiday will be delighted</p>
          </v-card>
        <v-row>
          <v-col v-for="(card, i) in cards" :key="i" class="ma-2">
            <CardsHome :cards="card" />
          </v-col>
        </v-row>
      </div>
    </v-container>
      <ParallaxHome class="parallax" />
    <v-container>
      <v-row>
        <BannerHome class="banner" />
      </v-row>
      <v-row justify="center" class="contacto">
        <v-col class="my-auto" sm="4">
          <v-img
            src="https://img.freepik.com/free-photo/frame-food-ingredients-baking-gently-pink-pastel-background-cooking-flat-lay-with-copy-space-top-view-baking-concept-flat-lay_127032-2200.jpg?w=2000">
          </v-img>
        </v-col>
        <Contact class="ml-5" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Cakes',
          subtitle: 'The best cake in the area',
          img: 'https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Ftorta01.png?alt=media&token=5011705f-40eb-472b-a55d-27bf33b57e02'
        },
        {
          title: 'Lunch',
          subtitle: 'Puff pastries, stuffed croissanst, tequeños',
          img: 'https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Flunch.png?alt=media&token=c29e28c6-06d9-47f5-8880-e602aa041820'
        },
        {
          title: 'Donuts',
          subtitle: 'Donuts filled with the best flavors',
          img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
        }
      ]
    }
  },
  computed: {
    merchant() {
      return this.$store.state.merchant
    }
  },
  created() {
    this.$store.dispatch('setMerchant')
    this.$store.dispatch('setProducts')
  }
}
</script>

<style scoped>
.fix {
  position: absolute;
  top: 10%;
  left: 10%;
  max-width: 500px;
  text-transform: uppercase;
}
.pad {
  padding-top: 80px;
  padding-bottom: 120px;
}
.parallax {
  padding-top: 80px;
  padding-bottom: 120px;
}
.contacto {
  padding-top: 150px;
  padding-bottom: 80px;
}
h1 {
  font-size: 4rem;
}
p {
  size: 18px;
}
.banner {
  padding-bottom: 120px;
  padding-top: 40px;
  height: 80vh;
  width: 100vw;
}
.siz {
  font-size: 40px;
}
.spaci {
  letter-spacing: 18px;
}
</style>