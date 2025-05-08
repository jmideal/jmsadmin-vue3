<template>
  <div>
    <svg-icon icon-class="github" @click="goto" />
  </div>
</template>

<script setup>
const url = ref('https://github.com/jmideal/jmsadmin-webman');

function goto() {
  window.open(url.value)
}
</script>
