import { createStore } from "vuex";
import { Modifiers } from "./Modifiers";

const store = createStore({
  state: {
    level: 76,
    strength: 0,
    dexterity: 0,
    intelligence: 14,
    attunement: 0,
    equipment: {
      body: {
        type: "Heretic Armor",
        mods: [{
          type: Modifiers.ARMOR,
          values: [109],
          implicit: true
        }, {
          type: Modifiers.MANA,
          values: [18],
          implicit: true
        }, {
          type: Modifiers.VITALITY,
          values: [8]
        }, {
          type: Modifiers.PERCENT_HEALTH,
          values: [10]
        }, {
          type: Modifiers.HEALTH,
          values: [99]
        }]
      },
      boots: {
        type: "Worn Boots",
        mods: [{
          type: Modifiers.MOVEMENT_SPEED,
          values: [4]
        }]
      }
    }
  },
  getters: {
    vitality(_, getters) {
      return 1 + getters.getTotalModValue(Modifiers.VITALITY);
    },
    health(state, getters) {
      let baseHealth = 100 + 8 * state.level + 10 * getters.vitality
        + getters.getTotalModValue(Modifiers.HEALTH) + 15; // TODO: +15 health in my passives
      return Math.floor(baseHealth * (1 + getters.getTotalModValue(Modifiers.PERCENT_HEALTH) / 100)); // VERIFIED
    },
    mana(state, getters) {
      return 50 + (Math.floor(state.level / 2)) + 2 * state.attunement
        + getters.getTotalModValue(Modifiers.MANA); // VERIFIED
    },
    healthRegeneration(_, getters) {
      return Math.floor(4 * (1 + getters.vitality / 50));
    },
    manaRegeneration() {
      return 10;
    },
    movementSpeed(_, getters) {
      return getters.getTotalModValue(Modifiers.MOVEMENT_SPEED);
    },
    armor(_, getters) {
      return getters.getTotalModValue(Modifiers.ARMOR);
    },
    getTotalModValue(state) {
      return id => {
        let total = 0;
        for (let key in state.equipment) {
          let gear = state.equipment[key];
          for (let mod of gear.mods) {
            if (mod.type == id) {
              total += mod.values[0];
            }
          }
        }
        return total;
      }
    }
  },

});

export { store };