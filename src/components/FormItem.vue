<template>
  <div class="contact__info-item" v-if="label !== 'id'">
    <div class="contact__info-label">{{ label }}</div>
    <input
      type="text"
      class="contact__info-input"
      :value="val"
      :disabled="!isEdit"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    val: [String, Number],
    isEdit: Boolean
  }
};
</script>

<style scoped>
.contact__info-label {
  font-size: 12px;
  font-weight: 300;
  opacity: 0.6;
  margin-bottom: 2px;
}
.contact__info-input {
  border: 1px solid #cdcdcd;
  border-radius: 4px;
  background: #fff;
  min-width: 50%;
  height: 30px;
  font-size: 14px;
  padding: 0 10px;
}
.contact__info-input:disabled {
  opacity: 0.7;
}

.add-new-field .contact__info-item:not(:last-child),
.add-new-contact .contact__info-item:not(:last-child) {
  margin-bottom: 12px;
}

.contact__info-item-wrap .contact__info-item input {
  width: 100%;
}

@media (max-width: 540px) {
  .contact__info-input {
    width: 100%;
  }
}
</style>