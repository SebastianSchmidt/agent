<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'

defineEmits<{
    (e: 'game-started', players: number): void
}>()

const number = ref(3)
</script>

<template>
    <div>
        <p class="text-lg mb-6">Wie viele Spieler:innen?</p>
        <div class="mb-8">
            <input
                class="p-1 border border-gray-300"
                type="number"
                min="3"
                max="8"
                v-model="number"
            />
        </div>
        <Button
            label="Spiel starten"
            @click="$emit('game-started', number)"
        />
    </div>
</template>