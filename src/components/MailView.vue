<template>
  <div class="email-display">
    <!--      <div class="toolbar">-->
    <!--        <button @click="toggleArchive">{{email.archived ? 'Move to Inbox (e)' : 'Archive (e)'}}</button>-->
    <!--        <button @click="toggleRead">{{email.read ? 'Mark Unread (r)' : 'Mark Read (r)'}}</button>-->
    <!--        <button @click="goNewer">Newer (k)</button>-->
    <!--        <button @click="goOlder">Older (j)</button>-->
    <!--      </div>-->

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
    <!--      <div v-html="marked(email.body)" />-->
  </div>
</template>

<script>
import { format } from "date-fns";
import marked from "marked";
export default {
  setup() {
    return {
      format,
      marked
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
