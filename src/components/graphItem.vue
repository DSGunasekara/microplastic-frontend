<template>
  <v-card
      class="mx-auto"
      max-width="344"
      outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Date: 2002/05/23
        </div>
        <v-list-item-title class="headline mb-1">
          Location: Galle
        </v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>

    </v-list-item>

    <v-card-actions>
      <v-btn
          outlined
          rounded
          text
      >
        View
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "graphItem"
}
</script>

<style scoped>

</style>