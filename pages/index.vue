<template>
    <div>
        <p>Hello World</p>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>