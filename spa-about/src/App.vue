<template>
  <div class="container">
    <h1>{{ $t("about.tittle") }}</h1>
    <separate-bar></separate-bar>
    <p>{{ $t("about.init_text") }}</p>
    <p>{{ $t("about.contact") }}</p>

    <ul>
      <li>
        <p>{{ $t("about.name") }}</p>
      </li>
      <li>
        <p>{{ $t("about.email") }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  margin-top: 40px;
  margin-left: 18%;
  margin-right: 40px;
  margin-bottom: 40px;
}

h1 {
  color: var(--general-tittle-color);
  font-size: var(--general-general-h1-size);
}
</style>
