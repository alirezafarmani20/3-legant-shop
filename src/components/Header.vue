<script setup>
const menu = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/products' },
  { name: 'Products', path: '' },
  { name: 'Contact Us', path: '/about' },
]
import Container from '@/layouts/Container.vue'
</script>

<template>
  <header class="w-full">
    <div class="w-full flex justify-center items-center h-[36px] sm:h-[40px] bg-neu-2 gap-2">
      <!--top section-->
      <img src="../assets/icons/Vector.png" alt="tickets icons" />
      <p class="text-[12px] sm:text-[14px]">30% off storewide — Limited time!</p>
      <button
        class="flex items-center justify-center text-app-blue border-b-[1px] border-app-blue text-[12px] sm:text-[14px]"
      >
        Shop Now <img src="../assets/icons/arrow-right.png" alt="arrow right" />
      </button>
    </div>
    <Container>
      <div class="w-full flex justify-between items-center my-[17px] sm:my-[22px]">
        <div class="flex items-center">
          <!--logo section-->
          <RouterLink to="/">
            <img src="../assets/images/logo.png" alt="site logo" />
          </RouterLink>
        </div>
        <div class="flex items-center">
          <!--menu section-->
          <nav class="hidden sm:flex items-center justify-between gap-8">
            <!--desctop menu-->
            <RouterLink
              v-for="item in menu"
              :to="item.path"
              :key="item.name"
              :class="{ 'font-bold': $route.path === item.path }"
              >{{ item.name }}</RouterLink
            >
          </nav>
          <div class="flex sm:hidden items-center">
            <!--mobile menu-->
            <button class="flex items-center">
              <img src="../assets/icons/mobile.png" alt="menu for mobile" />
            </button>
            <nav class=""></nav>
          </div>
        </div>
        <div class="hidden sm:flex items-center justify-between gap-6">
          <!--rgister bos-->
          <img src="../assets/icons/search.png" alt="search icon" />
          <img src="../assets/icons/user-circle.png" alt="user profile" />
          <img src="../assets/icons/shopping bag.png" alt="shopping bag" />
        </div>
      </div>
    </Container>
  </header>
</template>
