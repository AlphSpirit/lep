<template>
  <div id="lep">
    <CharacterSheet />
    <div class="grow"></div>
    Allo
  </div>
</template>

<script>
import CharacterSheet from "./components/CharacterSheet.vue";

export default {
  components: { CharacterSheet }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 18px;
  font-family: "Newsreader";
}

#app {
  height: 100%;
}
</style>

<style lang="scss" scoped>
#lep {
  height: 100%;
  display: flex;
  .grow {
    flex-grow: 1;
  }
}
</style>
