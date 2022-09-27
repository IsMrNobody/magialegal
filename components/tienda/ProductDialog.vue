<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      hide-overlay
      fullscreen
      transition="dialog-bottom-transition"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          absolute
          fab
          color="#565D47"
          large
          right
          top
          dark
          v-bind="attrs"
          @click="value2(0)"
          v-on="on"
        >
          <v-icon color="#EAAC9D">mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-container>
        <v-col>
          <v-card flat>
            <v-toolbar
              dark
              color="#565D47"
            >
              <v-btn
                icon
                dark
                @click="dialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{ producto.name + ' ' + chipInfo.title}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <!-- <v-toolbar-items>
                <v-btn
                  color="#EAAC9D"
                  dark
                  @click="dialog = false"
                >
                  Add to Car
                </v-btn>
              </v-toolbar-items> -->
            </v-toolbar>
            <v-container>
                <v-row>
                  <v-col sm="4">
                    <v-card height="400" width="300" flat class="mx-auto">
                      <v-img height="100%" :src="producto.img"></v-img>
                    </v-card>
                    <v-card-text>
                      <h4 class="grey--text">Ingredients:</h4>
                      <p class="grey--text">{{ producto.ingredients }}</p>
                    </v-card-text>
                  </v-col>
                  <v-col sm="8" cols>
                    <v-card-title>{{ producto.name }}</v-card-title>
                    <v-card-subtitle>{{ producto.category }}</v-card-subtitle>
                    <v-card-text>
                      <p class="text-subtitle-1 grey--text">{{ producto.description }}</p>
                      <!-- <p class="display-1">$ {{ producto.price }}</p> -->
                    </v-card-text>
                    <v-card-text>
                      <p>Portions:</p>
                      <v-chip-group                        
                        v-model="selection"
                        active-class="pink lighten-1 white--text"
                        column
                      >                   
                        <v-chip 
                          v-for="(chip, i) in producto.portion"
                          :key="i"
                          @click="value2(i)"
                        >
                          {{ chip.title }}
                        </v-chip>
                      </v-chip-group>
                      <p class="subtitle-2 grey--text">{{ chipInfo.description }}</p>
                      <p class="display-1"><span class="white--text">$ {{ total }}</span></p>
                      <!-- <h4>Ingredients:</h4>
                      <p class="grey--text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat quidem architecto illum suscipit aut culpa provident facere reprehenderit deleniti iure corporis distinctio ratione rem, nisi, rerum laboriosam repudiandae optio nemo.</p> -->
                      <v-card-actions>
                        <v-spacer class="d-flex d-sm-none"></v-spacer>
                        <v-btn outlined x-large color="#EAAC9D" class="mt-8" @click="addCart()">Add to
                          <v-icon>mdi-cart</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-col>
                </v-row>
            </v-container>
            <v-divider></v-divider>        
          </v-card>
        </v-col>
      </v-container>
    </v-dialog>
  </v-row>
</template>

<script>
  import { success } from '~/plugins/sweetAlert'
  export default {
    props: {
      producto: {
       type: Object,
       default: () => {}
      }
    },
    data () {
      return {
        selection: 0,
        dialog: false,
        chipInfo: '',
        total: this.producto.price
      }
    },
    methods: {
      value2(id) {
        const prod = this.producto.portion[id]
        this.chipInfo = prod
        const productPrice = this.producto.price
        const total = parseInt(productPrice) + prod.price
        this.total =  total
      },
      addCart() {
        const data = {
          totalProduct: this.total,
          selectedPortion: this.chipInfo,
          cantidad: 1,
          ...this.producto
        }
        this.$store.dispatch('carrito/addToCar', data)
        this.dialog = false
        success.fire('Added to cart')
      }
    },
  }
</script>
