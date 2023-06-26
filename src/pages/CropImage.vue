<template>
  <q-page>
    <AppNavigation>
      <template v-slot:title>
        <div class="text-white">Ubah Foto Profil</div>
      </template>
    </AppNavigation>
    <div class="container-change-photo">
      <div class="box-change-photo">
        <vue-cropper
          ref="cropper"
          :src="fileUrl"
          :guides="true"
          :view-mode="1"
          :auto-crop-area="1"
        ></vue-cropper>
        <!-- <img :src="fileUrl" alt="Selected Image" v-if="fileUrl" /> -->
      </div>
      <router-link to="/takephoto" class="router-link">
        <div class="button">Ambil Dari Camera</div>
      </router-link>
      <div class="button" v-on:click="choosePhoto">Ambil Dari Gallery</div>
      <input
        id="fileInput"
        type="file"
        style="display: none"
        v-on:change="handleFileUpload"
      />
      <div class="save-button" v-on:click="saveCroppedImage">
        <div class="button-text">Simpan</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import AppNavigation from "../components/AppNavigation";
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  name: "CropImage",
  components: {
    AppNavigation,
    VueCropper,
  },
  data() {
    return {
      file: null,
      fileUrl: null,
      croppedImage: null,
    };
  },
  // methods: {
  //   choosePhoto() {
  //     const fileInput = document.getElementById("fileInput");
  //     fileInput.click();
  //   },
  //   handleFileUpload(event) {
  //     this.init();
  //     const file = event.target.files[0];
  //     console.log("File yang di-upload:", file);
  //   },
  //   init() {
  //     this.fileUrl = URL.createObjectURL(this.file);
  //   },
  //   onCropEnd(event) {
  //     this.croppedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
  //   },
  //   saveCroppedImage() {
  //     console.log("Gambar yang di-crop:", this.croppedImage);
  //   },
  // },
  methods: {
    choosePhoto() {
      const fileInput = document.getElementById("fileInput");
      fileInput.click();
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
      this.fileUrl = URL.createObjectURL(this.file);
      console.log("File yang di-upload:", this.file);
    },
    saveCroppedImage() {
      // const croppedData = this.$refs.cropper.getCroppedCanvas().toDataURL();
      // simpan ke local storage
      localStorage.setItem("profile-photo", this.fileUrl);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container-change-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}
.box-change-photo {
  width: 343px;
  height: 343px;
  background-color: #e0e0e0;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.button {
  width: 341px;
  height: 40px;
  background-color: #006c84;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 40px 0px -25px 0px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}
.save-button {
  width: 375px;
  height: 44px;
  background-color: #002984;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 87px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.button-text {
  font-size: 14px;
}
</style>
