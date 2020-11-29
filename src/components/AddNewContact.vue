<template>
  <div class="add-new-contact">
    <ul v-if="hasErrors" class="error">
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form @submit.prevent="addContact">
      <FormItem v-model="newContact.name" :label="'Name*'" :isEdit="true" />
      <FormItem
        v-model="newContact.username"
        :label="'Username'"
        :isEdit="true"
      />
      <FormItem v-model="newContact.email" :label="'Email'" :isEdit="true" />
      <FormItem v-model="newContact.phone" :label="'Phone'" :isEdit="true" />

      <div class="btns">
        <button class="btn btn-cancel" @click="$emit('addContactToglle')">
          Cancel
        </button>
        <button class="btn btn-green" type="submit">
          Add contact
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import FormItem from "@/components/FormItem";
import { mutationTypes } from "@/store/modules/contact";

export default {
  data() {
    return {
      newContact: {},
      hasErrors: false,
      errors: {}
    };
  },

  components: {
    FormItem
  },

  methods: {
    addContact() {
      this.hasErrors = false;
      this.errors = {};

      if (this.newContact.name && this.newContact.name !== " ") {
        this.required = true;
      } else {
        this.required = false;
        this.errors.name = "Name can`t be blank";
      }

      if (this.newContact.phone && this.newContact.name) {
        if (this.newContact.phone.match(/[0-9]$/)) {
          this.required = true;
        } else {
          this.required = false;
          this.errors.phone = "Phone number can`t contain characters";
        }
      }

      if (this.required) {
        const contacts = this.$store.state.contact.contacts;
        let id = 1;

        if (contacts[contacts.length - 1]) {
          id = contacts[contacts.length - 1].id + 1;
        }

        this.newContact.id = id;
        this.$store.commit(mutationTypes.addNewContact, this.newContact);

        this.newContact = {};
        this.$emit("addContactToglle");
        this.errors = {};
      } else {
        this.hasErrors = true;
      }
    }
  }
};
</script>

<style scoped>
.contacts__info-item:not(:last-child) {
  margin-bottom: 10px;
}

.btns {
  margin-top: 18px;
}
.btn {
  margin-right: 20px;
}

@media (max-width: 540px) {
  .btns {
    margin-top: 0;
  }

  .btn {
    margin: 20px 0 0;
  }
}
</style>