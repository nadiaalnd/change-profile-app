<template>
  <q-page>
    <AppNavigation>
      <template v-slot:title>
        <div class="text-white">Ubah Foto Profil</div>
      </template>
    </AppNavigation>
    <div class="container-change-photo">
      <div class="box-change-photo">
        <img :src="selectedImage" alt="Selected Image" v-if="selectedImage" />
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
      <div class="save-button" v-on:click="savePhoto">
        <div class="button-text">Simpan</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import AppNavigation from "../components/AppNavigation";
export default {
  name: "ChangePhoto",
  components: {
    AppNavigation,
  },
  data() {
    return {
      selectedImage: null,
    };
  },
  mounted() {
    this.selectedImage = localStorage.getItem("profile-photo");
  },
  methods: {
    choosePhoto() {
      const fileInput = document.getElementById("fileInput");
      fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.encodeBase64ImageFile(file)
      .then(base64String => {
        console.log(base64String);
        this.selectedImage = base64String;
      })
      .catch(error => {
        console.error('Terjadi kesalahan saat mengencode gambar:', error);
      });
    },

    encodeBase64ImageFile(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },

    savePhoto() {
      localStorage.setItem("profile-photo", this.selectedImage);
      console.log(localStorage.getItem("profile-photo"));
      console.log("Photo saved!");
      this.$router.push("/"); // Redirect to home page
    },
  },
};
</script>

<style scoped>
.container-change-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
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
  background-color: #e0e0e0;
  color: #757575;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 87px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
