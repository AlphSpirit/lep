<template>
  <div id="characterSheet">

    <div class="character">
      <div class="name">TEST NAME</div>
      <div class="class">Acolyte</div>
      <div class="level">Level {{ $store.state.level }}</div>
    </div>

    <div class="stats">
      <div class="left">
        <div class="row">
          <div class="name">Strength</div>
          <div class="value">{{ $store.state.strength }}</div>
        </div>
        <div class="row">
          <div class="name">Dexterity</div>
          <div class="value">{{ $store.state.dexterity }}</div>
        </div>
        <div class="row">
          <div class="name">Intelligence</div>
          <div class="value">{{ $store.state.intelligence }}</div>
        </div>
        <div class="row">
          <div class="name">Attunement</div>
          <div class="value">{{ $store.state.attunement }}</div>
        </div>
        <div class="row">
          <div class="name">Vitality</div>
          <div class="value">{{ $store.state.vitality }}</div>
        </div>
      </div>
      <div class="right">
        <div class="row">
          <div class="name">Health</div>
          <div class="value">{{ $store.getters.health }}</div>
        </div>
        <div class="row">
          <div class="name">Mana</div>
          <div class="value">{{ $store.getters.mana }}</div>
        </div>
        <div class="row">
          <div class="name">Health Regeneration</div>
          <div class="value">{{ $store.getters.healthRegeneration }}</div>
        </div>
        <div class="row">
          <div class="name">Mana Regeneration</div>
          <div class="value">{{ $store.getters.manaRegeneration }}</div>
        </div>
        <div class="row">
          <div class="name">Movement Speed</div>
          <div class="value">{{ $store.getters.movementSpeed }}</div>
        </div>
      </div>
    </div>

    <div class="resistances">
      <div class="col">
        <div class="icon">F</div>
        <div class="value">0%</div>
      </div>
      <div class="col">
        <div class="icon">L</div>
        <div class="value">0%</div>
      </div>
      <div class="col">
        <div class="icon">C</div>
        <div class="value">0%</div>
      </div>
      <div class="col">
        <div class="icon">P</div>
        <div class="value">0%</div>
      </div>
      <div class="col">
        <div class="icon">O</div>
        <div class="value">0%</div>
      </div>
      <div class="col">
        <div class="icon">N</div>
        <div class="value">0%</div>
      </div>
      <div class="col">
        <div class="icon">V</div>
        <div class="value">0%</div>
      </div>
    </div>

    <div class="additionalDefenses">
      <div class="row">
        <div class="col">
          <div class="name">Block Chance</div>
          <div class="value">0</div>
        </div>
        <div class="col">
          <div class="name">Armour</div>
          <div class="value">17 > 6%</div>
        </div>
        <div class="col">
          <div class="name">Stun Avoidance</div>
          <div class="value">25</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="name">Block Effect.</div>
          <div class="value">0 > 0%</div>
        </div>
        <div class="col">
          <div class="name">Dodge</div>
          <div class="value">0 > 0%</div>
        </div>
        <div class="col">
          <div class="name">Ward Retention</div>
          <div class="value">8%</div>
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
#characterSheet {
  height: 100%;
  background-color: #111;
  color: #eee;
}

.character {
  padding: 10px;
  .name, .class, .level {
    text-transform: uppercase;
  }
  .name {
    font-size: 20px;
  }
  .class {
    font-size: 24px;
    color: #aaa;
  }
  .level {
    font-size: 20px;
    color: #9A9077;
  }
}

.stats {
  display: flex;
  .left, .right {
    flex-grow: 1;
    flex-basis: 0;
    padding: 10px;
  }
  .row {
    display: flex;
    .name {
      color: #9A9077;
      margin-right: 10px;
      text-transform: uppercase;
      flex-grow: 1;
      white-space: nowrap;
    }
    .value {
      font-weight: bold;
    }
  }
}

.resistances {
  padding: 10px;
  display: flex;
  .col {
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    .value {
      font-weight: bold;
    }
  }
}

.additionalDefenses {
  padding: 10px;
  .row {
    display: flex;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    .col {
      flex-grow: 1;
      flex-basis: 0;
      text-align: center;
      .name {
        color: #9A9077;
        text-transform: uppercase;
        white-space: nowrap;
        font-size: 14px;
        .value {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
