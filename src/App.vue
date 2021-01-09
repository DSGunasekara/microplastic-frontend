<template>
  <v-app>
    <nav>
      <v-toolbar flat></v-toolbar>
      <v-toolbar-title style="margin: 10px;">Microplastic Detector</v-toolbar-title>
    </nav>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
