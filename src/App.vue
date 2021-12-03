<script setup lang="ts">
import { getAllLocations, getRandomLocation, getRandomRoles, Location, Role } from './game'
import Settings from './components/Settings.vue'
import RoleCard from './components/RoleCard.vue'
import Locations from './components/Locations.vue'
import { Ref, ref } from 'vue'

const locations = getAllLocations()

const location: Ref<Location | null> = ref(null)
const roles: Ref<Role[] | null> = ref(null)
const numberOfPlayers = ref(0)
const currentPlayer = ref(0)

function startGame(players: number) {
  numberOfPlayers.value = players
  location.value = getRandomLocation()
  roles.value = getRandomRoles(location.value, players)
  currentPlayer.value = 0
}

function nextPlayer() {
  currentPlayer.value++
}
</script>

<template>
  <div class="p-4">
    <div class="p-4 bg-gray-100 rounded-xl h-full">
      <Settings
        v-if="numberOfPlayers < 1"
        @game-started="startGame"
      />
      <RoleCard
        v-if="numberOfPlayers > 0 && currentPlayer < numberOfPlayers && roles !== null"
        :number="currentPlayer"
        :name="roles[currentPlayer].name"
        :location="!roles[currentPlayer].agent ? location?.name : undefined"
        @next-player="nextPlayer"
      />
      <Locations
        v-if="numberOfPlayers > 0 && currentPlayer == numberOfPlayers"
        :locations="locations"
      />
    </div>
  </div>
</template>
