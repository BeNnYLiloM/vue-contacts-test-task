<template>
  <div class="contacts">
    <div v-if="addNewContact">
      <AddNewContact @addContactToglle="addContactToglle" />
    </div>

    <div v-else>
      <ContactListItem
        v-for="contact in contacts"
        :key="contact.id"
        :contact="contact"
      />

      <div class="flex justify-content-center">
        <button class="btn btn-green" @click="addContactToglle">
          Add new contact
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ContactListItem from "@/components/ContactListItem";
import AddNewContact from "@/components/AddNewContact";

export default {
  props: ["contacts"],

  data() {
    return {
      addNewContact: false
    };
  },

  components: {
    ContactListItem,
    AddNewContact
  },

  methods: {
    addContactToglle() {
      this.addNewContact = !this.addNewContact;
    }
  }
};
</script>

<style scoped>
.contacts {
  background: #fefad4;
  max-width: 520px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 10px;
}

.btn:not(:last-child) {
  margin-right: 20px;
}
</style>