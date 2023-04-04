<script setup lang="ts">
import { RouterLink } from "vue-router";

import ThemeToggle from "./ThemeToggle.vue";
</script>

<template>
  <header
    class="w-full px-6 py-2 flex bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
  >
    <nav class="w-full flex justify-between items-center max-w-4xl mx-auto">
      <div>
        <h1>
          <samp> TYPER </samp>
        </h1>
      </div>
      <ul class="flex space-x-2 justify-center items-center">
        <li>
          <RouterLink
            to="/"
            class="px-3 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-sm"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="px-3 py-2 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-sm"
          >
            About
          </RouterLink>
        </li>
        <ThemeToggle />
      </ul>
    </nav>
  </header>
</template>
