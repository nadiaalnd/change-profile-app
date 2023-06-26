<template>
  <q-page>
    <AppNavigation>
      <template v-slot:title>
        <div class="text-white">Ambil Foto</div>
      </template>
    </AppNavigation>
    <div class="camera-container">
      <video ref="video" class="camera-preview" autoplay></video>
      <div class="button-container">
        <q-btn
          round
          class="capture-button"
          color="white"
          icon="camera_alt"
          size="1rem"
          @click="capturePhoto"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import AppNavigation from "../components/AppNavigation";

export default {
  name: "TakePhoto",
  components: {
    AppNavigation,
  },
  data() {
    return {
      mediaStream: null,
    };
  },
  mounted() {
    this.startCamera();
  },
  beforeUnmount() {
    this.stopCamera();
  },
  methods: {
    async startCamera() {
      try {
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        this.$refs.video.srcObject = this.mediaStream;
      } catch (error) {
        console.error("Error starting camera:", error);
      }
    },
    stopCamera() {
      if (this.mediaStream) {
        this.mediaStream.getTracks().forEach((track) => track.stop());
        this.mediaStream = null;
      }
    },
    capturePhoto() {
      const canvas = document.createElement("canvas");
      const video = this.$refs.video;
      const width = video.videoWidth;
      const height = video.videoHeight;
      const ratio = 9 / 16;
      const canvasWidth = Math.min(width, height * ratio);
      const canvasHeight = canvasWidth / ratio;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const context = canvas.getContext("2d");
      context.drawImage(
        video,
        (width - canvasWidth) / 2,
        (height - canvasHeight) / 2,
        canvasWidth,
        canvasHeight,
        0,
        0,
        canvasWidth,
        canvasHeight
      );
      // const photoUrl = canvas.toDataURL();
      // this.stopCamera();
      // const canvas = document.createElement("canvas");
      const photoUrl = canvas.toDataURL();
      this.stopCamera();

      // Simpan di local storage
      localStorage.setItem("temporary-photo", photoUrl);
      this.$router.push("/previewphoto");
    },
  },
};
</script>

<style scoped>
.camera-container {
  position: relative;
  margin-top: 20px;
  margin-left: 15px;
  width: 343px;
  height: 550px;
}

.camera-preview {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
}

.button-container {
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.capture-button {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
</style>
