<template>
  <q-page>
    <AppNavigation>
      <template v-slot:title>
        <div class="text-white">Preview Foto</div>
      </template>
    </AppNavigation>
    <!-- <div class="preview-container">
      <img :src="photoUrl" alt="Preview Foto" class="preview-image" />
      <div class="save-button" @click="savePhoto">Simpan</div>
    </div> -->
    <div class="preview-container">
      <img :src="photoUrl" alt="Preview Photo" class="preview-image" />
    </div>
    <div class="button-container">
      <q-btn
        class="save-button"
        color="primary"
        label="Simpan"
        @click="savePhoto"
      />
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
  // props: {
  //   photoUrl: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // methods: {
  //   savePhoto() {
  //     console.log("Foto berhasil disimpan:", this.photoUrl);
  //   },
  // },
  data() {
    return {
      photoUrl: null,
    };
  },
  mounted() {
    // Ambil link sementara dari local storage
    console.log("Foto sementara:", localStorage.getItem("temporary-photo"));
    this.photoUrl = localStorage.getItem("temporary-photo");
  },
  methods: {
    savePhoto() {
      // Simpan gambar ke local storage
      const permanentPhotoUrl = this.photoUrl;
      console.log("Foto berhasil disimpan:", permanentPhotoUrl);
      localStorage.setItem("profile-photo", permanentPhotoUrl);
      localStorage.removeItem("temporary-photo");

      this.$router.push("/changephoto");
    },
  },
};
</script>

<style scoped>
.preview-container {
  position: relative;
  margin-top: 10px;
  margin-left: 15px;
  width: 343px;
  height: 550px;
}

.preview-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}

.save-button {
  width: 343px;
  height: 44px;
  background-color: #002984;
  color: #ffffff;
  position: relative;
  margin-left: 15px;
  margin-top: 0px;
  border-radius: 0 0 8px 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
