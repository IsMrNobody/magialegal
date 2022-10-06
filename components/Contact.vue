<template>
  <v-card flat class="transparent">
    <v-snackbar
      v-model="snackbar"
      absolute
      top
      right
      color="success"
    >
      <span>Registration successful!</span>
      <v-icon dark>
        mdi-checkbox-marked-circle
      </v-icon>
    </v-snackbar>
    <v-form
      ref="form"
      @submit.prevent="submit"
    >
      <v-container fluid>
        <p class="primary--text">Send me a message and I will be in contact with you very soon.</p>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="name"
              color="primary"
              label="Name"
              required
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="message"
              color="primary"
              clearable
            >
              <template #label>
                <div>
                  Message <small></small>
                </div>
              </template>
            </v-textarea>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <!-- <v-btn
          text
          @click="resetForm"
        >
          Cancel
        </v-btn> -->
        <v-spacer></v-spacer>
        <v-btn
          color="pink lighten-2"
          type="submit"
        >
          Send
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data () {      
      return {
        name: '',
        email: '',
        message: '',
        // rules: {
        //   name: [val => (val || '').length > 0 || 'This field is required'],
        // },
        snackbar: false
      }
    },

    computed: {
      merchant() {
        return this.$store.state.merchant
      }
    },

    methods: {
      async submit () {
        const data = {
          userName: this.name,
          email: this.email,
          comment: this.message,
          merchantPhone: this.merchant.phone
        }
        if (data.email &&  data.email) {
          this.snackbar = true
          await this.$store.dispatch('order/sendMsg', data)
        }
        this.snackbar = false
        this.name = ''
        this.email = ''
        this.message = ''
      },
    },
  }
</script>
