<template>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ut dolor modi
  iste labore totam corrupti reiciendis repellat sint consequuntur earum
  voluptas possimus, odio nisi laborum obcaecati ad sunt laudantium.
</template>

<script lang="js">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
export default {
  name: "CropImage",
  mounted() {
    this.init()
  },
  methods: {
    init() {
      console.log(this.$route.params)
    }
  }
}
</script>
