<script setup>
defineProps({
  label: String,
  link: String,
})
</script>

<template>
  <button class="flex items-center border-b-[1px] border-black w-[100px] h-[28px]">
    <RouterLink :to="link" class="flex items-center justify-center gap-2 text-[14px]"
      >{{ label }} <img class="w-[15px]" src="../assets/icons/arrow-right2.png" alt="arrow right"
    /></RouterLink>
  </button>
</template>
