<template>
  <div class="add-new-field">
    <div class="hor-line"></div>

    <div class="sub-title">Add new field</div>

    <ul class="error" v-if="error">
      <li>{{ errorText }}</li>
    </ul>

    <form @submit.prevent="validateForm">
      <FormItem
        v-model="newField.name"
        :label="'Name of new field*'"
        :val="newField.name"
        :isEdit="true"
      />

      <FormItem
        v-model="newField.val"
        :label="'Value of new field'"
        :val="newField.val"
        :isEdit="true"
      />

      <button class="btn btn-green add-new-field">
        Add new field
      </button>
    </form>
  </div>
</template>

<script>
import FormItem from "@/components/FormItem";

export default {
  data() {
    return {
      newField: {
        name: "",
        val: ""
      },
      error: false,
      errorText: "'Name of new field' can`t be blank"
    };
  },

  components: {
    FormItem
  },

  methods: {
    validateForm() {
      if (this.newField.name) {
        this.error = false;
        this.$emit("addNewField", this.newField);
        this.newField = {};
      } else {
        this.error = true;
      }
    }
  }
};
</script>

<style scoped>
.contact__form-item {
  margin-bottom: 12px;
}

.hor-line {
  border-top: 1px solid #765d69;
  margin-top: 18px;
  margin-bottom: 18px;
}

.add-new-field {
  margin-top: 6px;
}
</style>