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
          class="mx-auto pa-2 marron"
          height="350"
          width="250"
        >
          <v-img height="350" :src="n.img"></v-img>
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
          img: "https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Ftorta02.png?alt=media&token=dad75be6-d73b-4a61-ab54-6898a8319b2b"
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2FWhatsApp%20Image%202022-09-18%20at%208.08.07%20PM.jpeg?alt=media&token=ba3689ec-f3f5-43fc-ac7d-d7228f3e7f9a"
        },
        {
          img: "https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Ftortas%2Ftres%20leche.jpeg?alt=media&token=59c438eb-2137-45aa-9c7b-918cf647675e"
        }
      ]
    }),
  }
</script>

