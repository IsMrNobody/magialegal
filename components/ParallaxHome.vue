<template>
  <div>
    <v-img class="ponke d-none d-sm-flex" src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674686394/DaniPotter/libro_gapcvp.png"></v-img>
    <v-parallax
        height="300"
        class="parallax"
        src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674683508/DaniPotter/banner_p73apo.png"
    >
      <div class="logo mx-auto">
        <v-img 
          width="180"
          class="mx-auto"
          src="https://res.cloudinary.com/dku13l2ep/image/upload/v1674683508/DaniPotter/logo-legacy_drylrt.png"></v-img>
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