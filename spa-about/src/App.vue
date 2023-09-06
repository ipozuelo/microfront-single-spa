<template>

    <h1>{{ $t('about.tittle') }}</h1>
    <component-udemy></component-udemy>

</template>

<script>
import Udemy from '@/components/Udemy.vue';

export default {
  components: {
    'component-udemy': Udemy
  }
};
</script>

<style scoped>

*{
  margin-left: 280px;
  margin-top: 40px;
  font-family: "Poppins", sans-serif;
}
</style>