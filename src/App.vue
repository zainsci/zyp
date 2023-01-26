<script setup lang="ts">
import { RouterView } from "vue-router";

import { rootStore } from "@/stores";
import { isAlpha } from "@/utils/index";
import RootHeader from "@/components/RootHeader.vue";

const store = rootStore();

document.addEventListener("keydown", handleKeydown);

function handleKeydown(e: KeyboardEvent) {
  if (!store.isTyping) return;

  let char = e.key;

  if (char === "Backspace") {
    if (store.typeArr.length > 0) {
      store.typeArr.pop();
    }
  }

  if (
    isAlpha(char) ||
    char === " " ||
    char === "." ||
    char === "," ||
    char === "'" ||
    char === '"'
  ) {
    if (char !== store.initText[store.typeArr.length]) {
      if (char === " ") {
        store.mistakes++;
        store.typeArr.push(`<span class="bg-red-500 text-red-500">'</span>`);
      } else {
        store.mistakes++;
        store.typeArr.push(
          `<span class="bg-gray-100 text-red-500">${char}</span>`
        );
      }
    } else {
      store.typeArr.push(char);
    }
  }
}
</script>

<template>
  <RootHeader />

  <RouterView />
</template>
