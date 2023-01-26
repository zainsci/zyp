<script setup lang="ts">
import { ref } from "vue";

const currentKey = ref("");

document.addEventListener("keydown", (e) => (currentKey.value = e.key));
document.addEventListener("keyup", (e) => (currentKey.value = ""));

const keyRows = [
  ["`", ..."1234567890-=".split(""), "backspace"],
  ["tab", ..."qwertyuiop[]".split(""), "\\"],
  ["capslock", ..."asdfghjkl;'".split(""), "enter"],
  ["shift", ..."zxcvbnm,./".split(""), "shift"],
  ["ctrl", "fn", "win", "space", "alt", "cmd", "ctrl"],
  [],
];
</script>

<template>
  <div class="w-full bg-gray-200 rounded-sm p-4 mt-6 space-y-1">
    <div v-for="row in keyRows" :key="row[0]" class="flex space-x-1 w-full">
      <div
        v-for="key in row"
        :key="key"
        class="bg-gray-100 min-w-[3rem] select-none"
        :class="
          key === 'space' ||
          key === 'backspace' ||
          key === 'tab' ||
          key === '\\' ||
          key === 'capslock' ||
          key === 'enter' ||
          key === 'shift'
            ? key === 'space'
              ? 'flex-1 flex justify-center items-center'
              : 'flex-1'
            : 'block'
        "
      >
        <div
          class="p-2"
          :class="key === currentKey.toLowerCase() ? 'bg-gray-400' : ''"
        >
          {{ key }}
        </div>
      </div>
    </div>
  </div>
</template>
