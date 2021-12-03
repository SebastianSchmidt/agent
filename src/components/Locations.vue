<script setup lang="ts">
import { Location } from '../game'

defineProps<{
    locations: readonly Location[]
}>()
</script>

<template>
    <div>
        <p class="text-lg mb-6">Alle Orte</p>
        <div class="flex flex-col flex-wrap">
            <div
                v-for="location in locations"
                :key="location.name"
                class="flex-shrink-0"
            >
                {{ location.name }}
            </div>
        </div>
    </div>
</template>