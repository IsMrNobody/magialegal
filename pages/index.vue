<template>
  <div>
    <v-img class="banner" src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674683508/DaniPotter/banner_p73apo.png">
      <v-card class="fix transparent mx-auto" flat>
        <!-- <h1>The Taste of Your Celebrations</h1> -->
        <img width="70%" :src="merchant.logo" alt="">
        <v-col>
          <h2 class="beige--text spaci">Tramites legales con algo de magia</h2>
        </v-col>
        <v-btn outlined color="#f5df7b" to="/" class="mt-5">Lumus</v-btn>
      </v-card>
    </v-img>
    <v-container>
      <div class="text-center pad">
          <v-card max-width="700" flat class="transparent mx-auto">
            <h2 class="siz">Asesoría Legal</h2>
            <p class="">
              Gestiona y organiza tus documentos para hacer tus solicitudes
              con exito y sin perdida de tiempo
            </p>
          </v-card>
        <v-row justify="center">
          <v-col v-for="(card, i) in cards" :key="i" sm="4" cols>
            <CardsHome :cards="card" />
          </v-col>
        </v-row>
      </div>
    </v-container>
      <ParallaxHome class="parallax" />
    <v-container fluid>
      <div>
        <BannerHome class="mb-12" />
      </div>
      <v-row justify="center" class="contacto">
        <v-col class="my-auto" sm="5">
          <v-img
            width="250"
            class="mx-auto"
            src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674694261/DaniPotter/buho_hrcn3r.png">
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
          title: 'SAIME',
          subtitle: 'Gestion y apoyo en recolección de documentos',
          icono: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1674687214/DaniPotter/libro-sombrero_avraqi.png',
          img: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1674686522/DaniPotter/card_jqbqgq.png'
        },
        {
          title: 'INTT',
          subtitle: 'Gestion y apoyo en recolección de documentos',
          icono: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1674695999/DaniPotter/book0_nzr9ea.png',
          img: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1674686522/DaniPotter/card_jqbqgq.png'
        },
        {
          title: 'Apostilla',
          subtitle: 'Indicacion y observaciones para poder apostillar',
          icono: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1674695999/DaniPotter/cartas0_t7bd8i.png',
          img: 'https://res.cloudinary.com/dku13l2ep/image/upload/v1674686522/DaniPotter/card_jqbqgq.png'
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
    // this.$store.dispatch('setProducts')
  }
}
</script>

<style scoped>
.fix {
  /* position: absolute;
  top: 10%;
  left: 10%; */
  text-align: center;
  max-width: 500px;
  text-transform: uppercase;
}
.pad {
  padding-top: 40px;
  padding-bottom: 120px;
}
.parallax {
  padding-top: 80px;
  padding-bottom: 120px;
}
.contacto {
  padding-bottom: 80px;
  margin-top: 180px;
}
h1 {
  font-size: 4rem;
}
p {
  size: 18px;
}
.banner {
  /* padding-bottom: 60px;
  padding-top: 40px; */
  height: 60vh;
  width: 100vw;
}
.siz {
  font-size: 35px;
  text-transform: uppercase;
}
.spaci {  
  /* letter-spacing: 18px; */
}
</style>