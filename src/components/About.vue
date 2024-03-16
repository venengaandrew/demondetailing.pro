<template>
  <v-container id="about">
    <v-row>
      <v-col cols="12">
        <h2 class="minit-title">
          <b>ABOUT <span class="minit-color">DEMON DETAILING</span> </b>
        </h2>
      </v-col>
      <v-col cols="12">
        <v-sheet elevation="2" class="p-text" color="white">
          At Demon Detailing, we're your dedicated partners in vehicle care. With meticulous attention to detail and a commitment to excellence, we offer a comprehensive range of services designed to elevate your driving experience. Our skilled professionals are passionate about cars and committed to delivering exceptional results tailored to your specific needs.
        </v-sheet>
      </v-col>
      <v-col cols="12" md="12" sm="12" xl="6">
        <!-- https://i.postimg.cc/63mckTY3/MIN-IT-ILLUSTRATION-WHITE.jpg -->

        <v-img
          :src="`https://avatars.githubusercontent.com/u/23341488?v=4`"
          :lazy-src="`https://picsum.photos/10/6?image=${5 * 5 + 10}`"
          cover
          elevation="6"
          class="bg-grey-lighten-2 shadow"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <!-- <v-card
          cols="12"
          md="6"
          sm="12"
          title="MIN IT ON GITHUB"
          prepend-icon="mdi-github"
          append-icon="mdi-open-in-new"
          href="https://github.com/minhazulmin"
          target="_blank"
          rel="noopener"
        ></v-card> -->
      </v-col>
      <v-col cols="12" md="12" sm="12" xl="6">
        <v-sheet elevation="2" class="p-text mt-1" color="white">
        
        </v-sheet>
        <v-alert class="p-text mt-5" elevation="2" color="white">
          
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
@media only screen and (max-width: 425px) {
  .minit-title {
    font-size: 35px !important;
  }
}
.min-it {
  background: -webkit-linear-gradient(315deg, #ee1f3f 25%, #041e2b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.minit-color {
  background: -webkit-linear-gradient(315deg, #ee1f3f 25%, #ee1f3f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
}
.p-text {
  font-size: 18px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 15px;
}
.minit-title {
  color: #242020;
  font-size: 50px;
  font-weight: bold;
}
</style>