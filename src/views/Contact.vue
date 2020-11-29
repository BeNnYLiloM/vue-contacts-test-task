<template>
  <div class="contact">
    <div class="contact__top">
      <router-link class="contact__back" to="/">
        <img src="@/assets/back.svg" alt="" />
      </router-link>
    </div>

    <ContactItem />
  </div>
</template>

<script>
import ContactItem from "@/components/ContactItem";

export default {
  components: {
    ContactItem
  }
};
</script>

<style scoped>
.contact__back {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fefad4;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  transition: 0.2s ease-out;
  margin-left: 30px;
  padding-right: 2px;
}
.contact__back:hover {
  background: #fefad4;
}
.contact__back img {
  height: 26px;
}

@media (max-width: 540px) {
  .contact__top {
    text-align: center;
    margin-bottom: 30px;
  }

  .contact__back {
    margin-left: 0;
  }
}
</style>