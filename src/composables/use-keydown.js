import { onBeforeUnmount } from "vue";

let useKeydown = keyCombos => {
  let onKeydown = event => {
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

export default useKeydown;
