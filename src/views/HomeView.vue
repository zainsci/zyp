<script setup lang="ts">
import { rootStore } from "@/stores";

const store = rootStore();

function toggleTyping() {
  store.isTyping = !store.isTyping;

  if (store.isTyping) {
    let seconds = +store.time;
    store.typeArr = [];
    store.finished = false;

    const intId = setInterval(() => {
      seconds--;
      store.time = ("" + seconds).length === 1 ? "0" + seconds : "" + seconds;

      if (seconds === 0 || !store.isTyping) {
        clearInterval(intId);
        store.isTyping = false;
        store.finished = true;
        store.time = "30";
        store.calSpeed();
      }
    }, 1000);
  }
}

function toggleTimeFrame() {
  store.time = store.time === "30" ? "60" : "30";
}
</script>

<template>
  <main class="w-full max-w-4xl mx-auto py-10">
    <div
      class="mb-6 px-4 py-2 bg-gray-200 rounded-sm flex justify-between space-x-2"
    >
      <div class="bg-gray-200 flex space-x-4" v-if="store.finished">
        <div class="text-green-600 bg-gray-100 px-2 py-1">Finished!</div>
        <div class="bg-gray-100 px-2 py-1">
          Accuracy:
          {{ 100 - Math.round((store.mistakes / store.typeArr.length) * 100) }}%
        </div>
        <div class="bg-gray-100 px-2 py-1">
          Speed: {{ store.calculatedSpeed }}
        </div>
      </div>

      <div class="flex space-x-2 ml-auto">
        <button
          @click="store.generateNewSentence"
          class="px-4 py-1 bg-gray-100 rounded-sm hover:bg-gray-300"
        >
          <samp> New </samp>
        </button>
        <button
          v-if="!store.isTyping"
          @click="toggleTyping"
          class="px-4 py-1 bg-gray-100 rounded-sm hover:bg-gray-300"
        >
          <samp> Start </samp>
        </button>
        <button
          v-if="store.isTyping"
          @click="toggleTyping"
          class="px-4 py-1 bg-gray-100 rounded-sm hover:bg-gray-300"
        >
          <samp> Stop </samp>
        </button>

        <div
          class="px-4 py-1 bg-gray-100 rounded-sm select-none cursor-pointer"
          @click="toggleTimeFrame"
        >
          <samp>00:{{ store.time }}</samp>
        </div>
      </div>
    </div>
    <div
      class="bg-gray-100 rounded-sm select-none w-full max-w-4xl mx-auto relative overflow-hidden"
    >
      <div
        class="absolute top-0 left-0 w-full max-w-4xl h-full mx-auto bg-transparent text-2xl font-mono p-4 text-gray-700"
      >
        <div
          v-html="store.typeArr.join('')"
          class="after:content-['|'] after:inline-block after:-translate-x-[6px] after:-translate-y-[2px] after:animate-pulse"
        ></div>
      </div>
      <div class="text-2xl font-mono p-4 text-gray-400">
        {{ store.initText }}
      </div>
    </div>
    <div></div>
  </main>
</template>
