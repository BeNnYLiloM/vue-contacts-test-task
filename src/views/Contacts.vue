<template>
  <div>
    <h1 class="main-title">Contacts</h1>

    <ContactList :contacts="allContacts" />
  </div>
</template>

<script>
import ContactList from "@/components/ContactList";
import { mapGetters } from "vuex";
import { getterTypes } from "@/store/modules/contact";

export default {
  computed: {
    ...mapGetters({
      allContacts: getterTypes.allContacts
    })
  },
  components: {
    ContactList
  }
};
</script>