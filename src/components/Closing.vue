<script setup>
const props = defineProps({ data:Object, caption: Object });
</script>
<template>
  <v-container height="100dvh" class="relative p-0">
    <v-img :src="props.data?.foto_opening" height="100dvh" cover></v-img>
    <div
      class="absolute top-0 left-0 w-full h-full flex items-center bg-gradient-to-t from-orange-100/40 to-gray-800"
    >
      <div
        class="text-center animate__animated animate__zoomIn animate__delay-1s mb-10 px-5"
      >
        <p class="text-[14px]" v-html="props.caption?.islam?.penutup[1]"></p>
      </div>
      <div
        class="absolute bottom-[15vh] left-0 w-full animate__animated animate__fadeInUp animate__delay-2s"
      >
        <div class="flex justify-center mt-[20vh]">
          <img src="/public/logo.png" alt="Āmantrana" class="w-20" />
        </div>
        <div class="text-center">
          <small>Digital Wedding Invitation © 2025</small>
        </div>
      </div>
    </div>
  </v-container>
</template>
