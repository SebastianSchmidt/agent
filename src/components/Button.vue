<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>

<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        {{ label }}
    </button>
</template>
