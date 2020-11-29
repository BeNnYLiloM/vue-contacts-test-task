<template>
  <div>
    <div class="contact">
      <div class="contact__name main-title">
        {{ contact.name }}
      </div>

      <div class="contact__info">
        <form @submit.prevent="updateContact">
          <div
            class="contact__info-edit"
            @click="toggleEditMode"
            v-if="!isEdit"
          >
            <img src="@/assets/edit-ico.svg" />
          </div>

          <ul v-if="hasErrors" class="error">
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>

          <div
            class="contact__info-item-wrap"
            v-for="(item, key) in contact"
            :key="item.id"
          >
            <FormItem
              v-model="editedContact[key]"
              :label="key"
              :val="item"
              :isEdit="isEdit"
            />
            <button
              type="button"
              v-if="key !== 'id' && key !== 'name' && !isEdit"
              class="btn btn-delete"
              @click="delField(key)"
            >
              -
            </button>
          </div>

          <div class="contact__info-btns" v-if="isEdit">
            <button
              type="button"
              class="btn btn-cancel"
              @click="toggleEditMode('cancel')"
            >
              Cancel
            </button>
            <button class="btn btn-green" type="submit">Save</button>
          </div>
        </form>

        <button
          v-if="isModified && !isEdit"
          type="button"
          class="btn btn-green cancel-last-changes"
          @click="cancelLastChanges"
        >
          Cancel last changes
        </button>

        <AddNewField v-if="!isEdit" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getterTypes, mutationTypes } from "@/store/modules/contact";
import FormItem from "@/components/FormItem";
import AddNewField from "@/components/AddNewField";

export default {
  data() {
    return {
      editedContact: {},
      isEdit: false,
      contactId: +this.$route.params.id,
      hasErrors: false,
      errors: {},
      required: false,
      newField: {},
      isModified: false
    };
  },

  computed: {
    ...mapGetters({
      getContact: getterTypes.getContact
    }),

    // get contact by id
    contact() {
      return this.getContact(this.contactId);
    }
  },

  components: {
    FormItem,
    AddNewField
  },

  methods: {
    // toggle edit mode
    toggleEditMode(cancel = "") {
      if (cancel === "cancel") {
        let notEqual = false;

        Object.keys(this.contact).forEach(key => {
          if (this.editedContact[key]) {
            if (this.editedContact[key] !== this.contact[key]) {
              notEqual = true;
            }
          }
        });

        if (notEqual) {
          if (
            confirm(
              "Are you sure you want to undo the edit? All unsaved data will be lost"
            )
          ) {
            this.isEdit = !this.isEdit;
          }
        } else {
          this.isEdit = !this.isEdit;
        }
      } else {
        this.editedContact.name = this.contact.name;
        this.editedContact.phone = this.contact.phone;

        this.isEdit = !this.isEdit;
      }
    },

    // update contact
    updateContact() {
      const data = {
        updateData: this.editedContact
      };

      this.hasErrors = false;
      this.errors = {};

      // validation name
      if (this.editedContact.name && this.editedContact.name !== " ") {
        this.required = true;
      } else {
        this.required = false;
        this.errors.name = "Name can`t be blank";
      }

      if (this.editedContact.phone && this.editedContact.name) {
        // validation phone number
        if (this.editedContact.phone.match(/[0-9]$/)) {
          this.required = true;
        } else {
          this.required = false;
          this.errors.phone = "Phone number can`t contain characters";
        }
      }

      if (this.required) {
        // save previous state of contact
        this.$store.state.contact.prevStateOfContact = JSON.parse(
          JSON.stringify(this.contact)
        );

        this.$store.commit(mutationTypes.updateContact, data);
        this.isEdit = !this.isEdit;
        this.isModified = true;
      } else {
        this.hasErrors = true;
      }
    },

    // delete field
    delField(fieldName) {
      if (confirm("Are you sure you want to delete this field?")) {
        this.$store.commit(mutationTypes.deleteField, fieldName);
      }
    },

    // cancel last changes
    cancelLastChanges() {
      const data = {
        updateData: this.$store.state.contact.prevStateOfContact
      };

      this.$store.commit(mutationTypes.updateContact, data);
      this.isModified = false;
    }
  }
};
</script>

<style scoped>
.contact__name {
  font-size: 28px;
  margin-bottom: 28px;
}

.contact__info {
  max-width: 520px;
  margin: 0 auto;
  background: #fefad4;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 16px 20px 20px;
  position: relative;
}

.contact__info-edit {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  cursor: pointer;
  height: 20px;
  z-index: 5;
}

.contact__info-item-wrap {
  display: flex;
  align-items: flex-end;
}
.contact__info-item-wrap:not(:last-child) {
  margin-bottom: 12px;
}
.contact__info-item-wrap .contact__info-item {
  flex-basis: 50%;
}

.contact__info-btns {
  margin-top: 18px;
}

.btn {
  margin-right: 20px;
}

.btn-delete {
  margin: 0 0 2px 10px;
}

.cancel-last-changes {
  margin-top: 18px;
}

@media (max-width: 540px) {
  .contact__info-item-wrap .contact__info-item {
    flex: 1;
  }

  .contact__info-btns {
    margin-top: 0;
  }

  .btn:not(.btn-delete) {
    margin: 20px 0 0;
  }
}
</style>