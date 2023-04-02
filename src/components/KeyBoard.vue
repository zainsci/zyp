<script setup lang="ts">
import { ref } from "vue";

const currentKey = ref("");

const newKeyRows = [
  [
    {
      key: "backquote",
      value: "`",
    },
    ..."1234567890".split(""),
    { key: "minus", value: "-" },
    { key: "equal", value: "=" },
    "backspace",
  ],
  [
    "tab",
    ..."qwertyuiop".split(""),
    { key: "bracketleft", value: "[" },
    { key: "bracketright", value: "]" },
    { key: "backslash", value: "\\" },
  ],
  [
    "capslock",
    ..."asdfghjkl".split(""),
    { key: "semicolon", value: ";" },
    { key: "quote", value: "'" },
    "enter",
  ],
  [
    { key: "shiftleft", value: "shift" },
    ..."zxcvbnm".split(""),
    { key: "comma", value: "," },
    { key: "period", value: "." },
    { key: "slash", value: "/" },
    { key: "shiftright", value: "shift" },
  ],
  [
    { key: "controlleft", value: "ctrl" },
    { key: "altleft", value: "alt" },
    "win",
    { key: "space", value: "space" },
    { key: "altright", value: "alt" },
    "cmd",
    { key: "controlright", value: "ctrl" },
  ],
];

document.addEventListener("keydown", (e) => {
  currentKey.value = e.code
    .toLocaleLowerCase()
    .replace("key", "")
    .replace("digit", "");
});
document.addEventListener("keyup", () => (currentKey.value = ""));

function getKeyClassName(key: string | { key: string; value: string }) {
  if (typeof key !== "string") {
    switch (key.value) {
      case "space":
      case "shift":
      case "tab":
      case "\\":
        return "flex-1";
    }
  } else {
    switch (key) {
      case "tab":
      case "enter":
      case "capslock":
      case "backspace":
        return "flex-1";
    }
  }
}

function renderKeyValue(key: string | { key: string; value: string }) {
  if (typeof key !== "string") {
    return key.value;
  }

  if (currentKey.value.includes("shift")) {
    if ("abcdefghijklmnopqrstuvwxyz".includes(key)) {
      return key.toUpperCase();
    }
  }
  return key;
}
</script>

<template>
  <div class="w-full bg-gray-200 rounded-sm p-4 mt-6 space-y-1">
    <div
      v-for="row in newKeyRows"
      :key="typeof row[0] === 'string' ? row[0] : row[0].value"
      class="flex space-x-1 w-full"
    >
      <div
        v-for="key in row"
        :key="typeof key === 'string' ? key : key.value"
        class="bg-gray-100 min-w-[3rem] select-none"
        :class="getKeyClassName(key)"
      >
        <div
          class="p-2 w-full"
          :class="
            typeof key !== 'string'
              ? key.key === currentKey
                ? 'bg-gray-400'
                : ''
              : key === currentKey
              ? 'bg-gray-400'
              : ''
          "
        >
          {{ renderKeyValue(key) }}
        </div>
      </div>
    </div>
  </div>
</template>
