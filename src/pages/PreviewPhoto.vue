<template>
  <q-page>
    <AppNavigation>
      <template v-slot:title>
        <div class="text-white">Potong Gambar</div>
      </template>
    </AppNavigation>
    <div class="preview-container">
      <img :src="photoUrl" alt="Preview Foto" class="preview-image" />
      <div class="save-button" @click="savePhoto">Simpan</div>
    </div>
  </q-page>
</template>

<script>
import AppNavigation from "../components/AppNavigation";

export default {
  name: "PreviewPhoto",
  components: {
    AppNavigation,
  },
  props: {
    photoUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    savePhoto() {
      console.log("Foto berhasil disimpan:", this.photoUrl);
    },
  },
};
</script>

<style scoped>
.preview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.save-button {
  width: 375px;
  height: 44px;
  background-color: #002984;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
