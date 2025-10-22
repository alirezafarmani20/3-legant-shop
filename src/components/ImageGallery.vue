<script setup>
import { ref } from 'vue'
import Container from '@/layouts/Container.vue'

import image1 from '@/assets/images/image1.png'
import image2 from '@/assets/images/image2.png'
import image3 from '@/assets/images/image3.png'

const images = [image1, image2, image3]
const currentIndex = ref(0)

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

function prevImage() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<template>
  <Container>
    <div class="w-full flex flex-col items-center gap-4 my-[20px] sm:my-[40px] relative">
      <img
        :src="images[currentIndex]"
        alt="gallery image"
        class="w-full h-[304px] sm:h-[636px] rounded-lg shadow-md"
      />
      <div class="flex w-full justify-between px-4 gap-4 absolute top-[45%]">
        <button
          @click="prevImage"
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-[50%] w-[56px] h-[56px]"
        >
          <img src="../assets/icons/arrow-left.png" alt="arrow left" />
        </button>
        <button
          @click="nextImage"
          class="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-[50%] w-[56px] h-[56px]"
        >
          <img src="../assets/icons/arrow-right2.png" alt="arrow right" />
        </button>
      </div>
    </div>
    <div class="my-[20px] sm:my-[40px] w-full flex items-center justify-between flex-wrap">
      <!--button text box-->
      <div class="flex items-center w-full sm:w-[543px]">
        <p class="text-wrap text-[40px] sm:text-[50px] md:text-[67px]">
          Simply Unique <span class="text-neu-4">/</span> <br />Simply Better
          <span class="text-neu-4">.</span>
        </p>
      </div>
      <div class="flex items-center w-full sm:w-[420px]">
        <p class="font-normal">
          <span class="font-bold">3legant</span>
          <span class="text-neu-4"
            >is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
          </span>
        </p>
      </div>
    </div>
  </Container>
</template>
