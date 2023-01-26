<template>
  <div>
    <v-img width="100vw" height="240" src="https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Fparallax_2.png?alt=media&token=8d398c2d-854f-45bb-965a-72a9f78697be">
      <v-card class="transparent ma-5 text-center" flat>
        <v-img width="300" class="mx-auto" src="/sweet.png"></v-img>
        <!-- <h2>{{ merchant.name }}</h2> -->
        <h4>{{ merchant.description }}</h4>
        <p>@</p>
        <!-- <v-btn color="pink">Buy</v-btn> -->
      </v-card>
    </v-img>
  </div>
</template>

<script>
export default {
  props: {
    merchant: {
      type: Object,
      default: () => {}
    }
  }
}
</script>