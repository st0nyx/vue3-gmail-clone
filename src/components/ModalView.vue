<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
import { onBeforeUnmount } from "vue";

let useKeydown = keyCombos => {
  let onKeydown = event => {
    console.log(event.key);

    let kc = keyCombos.find(kc => kc.key == event.key);
    if (kc) {
      // eslint-disable-next-line vue/custom-event-name-casing
      kc.fn();
    }
  };
  window.addEventListener("keydown", onKeydown);
  onBeforeUnmount(() => {
    window.removeEventListener("keydown", onKeydown);
  });
};

export default {
  setup(props, { emit }) {
    useKeydown([
      // eslint-disable-next-line vue/custom-event-name-casing
      {
        key: "Escape",
        fn: () => {
          // eslint-disable-next-line vue/custom-event-name-casing
          emit("closeModal");
        }
      },
      {
        key: "Enter",
        fn: () => {
          // eslint-disable-next-line vue/custom-event-name-casing
          console.log("A different Function");
        }
      }
    ]);

    return {
      emit
    };
  }
};
</script>

<style scoped></style>
