<template>
  <div class="contacts__item-wrap">
    <router-link
      class="contacts__item"
      :to="{ name: 'contact', params: { id: contact.id } }"
    >
      <div class="contacts__item-name">
        {{ contact.name }}
      </div>
      <div class="contacts__item-phone">
        {{ contact.phone }}
      </div>
    </router-link>
    <button class="btn btn-delete" @click="delContact">-</button>
  </div>
</template>

<script>
import { mutationTypes } from "@/store/modules/contact";

export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },

  methods: {
    delContact() {
      if (confirm("Are you sure you want to delete this contact?")) {
        this.$store.commit(mutationTypes.deleteContact, this.contact.id);
      }
    }
  }
};
</script>

<style scoped>
.contacts__item {
  background: #765d69;
  color: #fff;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: 10px 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex: 1;
}
.contacts__item-wrap {
  display: flex;
  align-items: center;
}
.contacts__item-wrap:not(:last-child) {
  margin-bottom: 10px;
}
.btn-delete {
  margin-left: 10px;
}

@media (max-width: 540px) {
  .contacts__item {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 12px;
  }
}
</style>