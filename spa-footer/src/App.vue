<template>
  <div id="app">
    <ul>
      <li><a href="https://twitter.com/">Twitter</a></li>
      <li><a href="mailto:jisraelpzlweb@gmail.com">Email</a></li>
      <li>
        <a href="https://github.com/ipozuelo/microfront-single-spa">Github</a>
      </li>
      <li>
        <a>👋</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  justify-items: center;
  margin: auto;
}

@media (min-width: 300px) {
  ul {
    grid-auto-flow: column;
  }
}

a {
  color: white;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 100%, 0.4);
}

a:hover {
  box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
}

li:last-child {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

li:hover ~ li p {
  animation: wave-animation 0.3s infinite;
}

/* below is just for demo styling */

div {
  display: flex;
  height: 70vh;
  width: 100%;
  background-color: #002a38;
  line-height: 1.3;
  font-family: Menlo, monospace;
}

@keyframes wave-animation {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}
</style>
