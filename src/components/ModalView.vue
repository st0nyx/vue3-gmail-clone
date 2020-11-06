<template>
  <div class="modal">
    <div class="overlay" @click="emit('closeModal')"></div>
    <div class="modal-card">
      <slot />
    </div>
  </div>
</template>

<script>
import useKeydown from "@/composables/use-keydown";

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
