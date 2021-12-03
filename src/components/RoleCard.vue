<script setup lang="ts">
import { ref, watch } from 'vue'
import Button from './Button.vue'

const props = defineProps<{
    number: number,
    name: string,
    location?: string
}>()

defineEmits<{
    (e: 'next-player'): void
}>()

const visible = ref(false)
watch([props], () => visible.value = false)
</script>

<template>
    <div>
        <p class="text-lg mb-6">Spieler:in {{ number + 1 }}</p>
        <div :class="['mb-8', !visible ? 'blurred' : '']">
            <p class="text-2xl font-bold">{{ visible ? name : 'Unbekannt' }}</p>
            <p class="text-xl">{{ visible && location ? location : 'Unbekannt' }}</p>
        </div>
        <Button
            v-if="!visible"
            @click="visible = true"
            label="Anzeigen"
        />
        <Button
            v-if="visible"
            @click="$emit('next-player')"
            label="Nächster Spieler"
        />
    </div>
</template>

<style scoped>
.blurred {
    color: transparent;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.75);
}
</style>
