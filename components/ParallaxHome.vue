<template>
  <div>
    <v-img class="ponke d-none d-sm-flex" src="https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Fponke.png?alt=media&token=4783d3dd-23ff-4749-89ef-8cc9c3318c0e"></v-img>
    <v-parallax
        height="300"
        class="parallax"
        src="https://firebasestorage.googleapis.com/v0/b/eden-d8ccb.appspot.com/o/Sweet%20Jesus%2Fparallax_2.png?alt=media&token=8d398c2d-854f-45bb-965a-72a9f78697be"
    >
      <div class="logo mx-auto">
        <v-img src="/logo2.png"></v-img>
      </div>
    </v-parallax>
  </div>
</template>

<style scoped>
.parallax {
  background-repeat: repeat;
  background-size: cover;
}
.logo {
  width: 320px;
}
.ponke {
  position: absolute;
  z-index: 1;
  left: 50px;
  margin-top: -80px;
  width: 120px;
  rotate: 45deg;
}
</style>