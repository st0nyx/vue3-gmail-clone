import { reactive } from "vue";

const emails = reactive(new Set());

export const useEmailSelection = function() {
  const toggle = email => {
    if (emails.has(email)) {
      emails.delete(email);
    } else {
      emails.add(email);
    }
  };

  return {
    emails,
    toggle
  };
};

export default useEmailSelection;
