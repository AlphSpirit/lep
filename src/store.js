import { createStore } from "vuex";
import { Modifiers } from "./Modifiers";

const store = createStore({
  state: {
    level: 1,
    strength: 0,
    dexterity: 0,
    intelligence: 2,
    attunement: 0,
    vitality: 1,
    equipment: {
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
    health(state) {
      return 100 + 8 * state.level + 10 * state.vitality;
    },
    mana(state) {
      return 51 + 2 * state.attunement;
    },
    healthRegeneration(state, getters) {
      return 4 + Math.floor(getters.health * state.vitality / 50);
    },
    manaRegeneration() {
      return 10;
    },
    movementSpeed(_, getters) {
      return getters.getTotalModValue(Modifiers.MOVEMENT_SPEED);
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