import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

import { generateSentence } from "@/utils";

export const rootStore = defineStore("root", () => {
  const initText = ref(generateSentence());
  const typeArr: Ref<Array<string>> = ref([]);
  const isTyping = false;
  const time = ref("30");
  const finished = ref(false);
  const mistakes = ref(0);
  const calculatedSpeed = ref(0);

  function calSpeed() {
    switch (time.value) {
      case "30": {
        const sentence = typeArr.value.join(" ");
        const words = sentence.split("  ").length;

        calculatedSpeed.value = words * 2;
        break;
      }
      case "60": {
        const sentence = typeArr.value.join(" ");
        const words = sentence.split("  ").length;

        calculatedSpeed.value = words;
        break;
      }
    }
  }

  function generateNewSentence() {
    typeArr.value = [];
    finished.value = false;
    const sentence = generateSentence();
    initText.value = sentence;
  }

  return {
    initText,
    typeArr,
    isTyping,
    time,
    finished,
    mistakes,
    calSpeed,
    calculatedSpeed,
    generateNewSentence,
  };
});
