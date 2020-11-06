<template>
  <div class="email-display">
    <div>
      <button @click="toggleArchive">
        {{ email.archived ? "Move to Inbox (e)" : "Archive (e)" }}
      </button>
      <button @click="toggleRead">
        {{ email.read ? "Mark Unread (r)" : "Mark Read (r)" }}
      </button>
      <button @click="goNewer">Newer (k)</button>
      <button @click="goOlder">Older (j)</button>
    </div>
    <h2 class="mb-0">
      Subject: <strong>{{ email.subject }}</strong>
    </h2>
    <div>
      <em
        >From {{ email.from }} on
        {{ format(new Date(email.sentAt), "MMM do yyyy") }}</em
      >
    </div>
    <div v-html="marked(email.body)" />
  </div>
</template>

<script>
import { format } from "date-fns";
import marked from "marked";
// import axios from "axios";
import useKeydown from "../composables/use-keydown";
import { ref } from "vue";
export default {
  setup(props, { emit }) {
    // let email = props.email;
    let toggleRead = () => {
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("changeEmail", { toggleRead: true, save: true });
    };
    let toggleArchive = () => {
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("changeEmail", {
        toggleArchive: true,
        save: true,
        closeModal: true
      });
    };
    let goNewer = () => {
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("changeEmail", { changeIndex: -1 });
    };
    let goOlder = () => {
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("changeEmail", { changeIndex: 1 });
    };
    let goNewerAndArchive = () => {
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("changeEmail", { changeIndex: -1, toggleArchive: true, save: true });
    };
    let goOlderAndArchive = () => {
      // eslint-disable-next-line vue/custom-event-name-casing
      emit("changeEmail", { changeIndex: 1, toggleArchive: true, save: true });
    };
    useKeydown([
      { key: "r", fn: toggleRead },
      { key: "e", fn: toggleArchive },
      { key: "k", fn: goNewer },
      { key: "j", fn: goOlder },
      { key: "[", fn: goNewerAndArchive },
      { key: "]", fn: goOlderAndArchive }
    ]);
    return {
      format,
      marked,
      toggleRead: ref(toggleRead),
      toggleArchive: ref(toggleArchive),
      goNewer: ref(goNewer),
      goOlder: ref(goOlder)
    };
  },
  props: {
    email: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
