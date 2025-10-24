<script setup>
import Container from '@/layouts/Container.vue'
import AppButton from './AppButton.vue'
</script>

<template>
  <Container>
    <div class="flex flex-col sm:flex-row items-center justify-between my-[20px] sm:my-[40px]">
      <div
        class="flex w-full sm:w-[548px] h-[377px] sm:h-[664px] relative bg-[url(@/assets/images/chair.png)] bg-cover rounded-[5px]"
      >
        <div class="flex flex-col gap-1 absolute top-[10px] left-[2rem]">
          <!--text box-->
          <h3 class="text-[34px] sm:text-[38px] font-medium">Bedroom</h3>
          <AppButton label="Shop Now" link="/shop" />
        </div>
      </div>
      <div class="flex items-center justify-center gap-3 flex-col my-[10px] sm:my-0">
        <!--box2-->
        <div
          class="flex relative w-[340px] sm:w-[548px] h-[180px] sm:h-[319px] bg-[url(@/assets/images/drower.png)] bg-cover rounded-[5px]"
        >
          <div class="flex flex-col gap-1 absolute bottom-[10px] left-[2rem]">
            <!--text box-->
            <h3 class="text-[24px] sm:text-[38px] font-medium">Bedroom</h3>
            <AppButton label="Shop Now" link="/shop" />
          </div>
        </div>
        <div
          class="flex relative w-[340px] sm:w-[548px] h-[181px] sm:h-[319px] bg-[url(@/assets/images/toster.png)] bg-cover rounded-[5px]"
        >
          <div class="flex flex-col gap-1 absolute bottom-[10px] left-[2rem]">
            <!--text box-->
            <h3 class="text-[24px] sm:text-[38px] font-medium">Kitchen</h3>
            <AppButton label="Shop Now" link="/shop" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>
