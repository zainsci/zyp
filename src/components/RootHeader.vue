<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="w-full px-6 py-2 flex bg-gray-200">
    <nav class="w-full flex justify-between items-center max-w-4xl mx-auto">
      <div>
        <h1>
          <samp> TYPER </samp>
        </h1>
      </div>
      <ul class="flex space-x-2">
        <li>
          <RouterLink to="/" class="px-3 py-1 hover:bg-gray-300 rounded-sm">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="px-3 py-1 hover:bg-gray-300 rounded-sm"
          >
            About
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
