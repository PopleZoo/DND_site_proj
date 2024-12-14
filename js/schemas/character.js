// Core character schema
export const characterSchema = {
  // Basic Info
  id: String,
  name: String,
  readonlyUrl: String,
  avatarUrl: String,
  
  // Core Stats
  stats: [{
    id: Number,  // 1-6 for STR, DEX, CON, INT, WIS, CHA
    value: Number,
    bonusValue: Number,
    overrideValue: Number
  }],

  // Health
  baseHitPoints: Number,
  bonusHitPoints: Number,
  temporaryHitPoints: Number,
  removedHitPoints: Number,
  currentXp: Number,

  // Character Details
  race: {
    isSubRace: Boolean,
    baseRaceName: String,
    fullName: String,
    description: String,
    avatarUrl: String,
    isHomebrew: Boolean,
    racialTraits: [{
      definition: {
        name: String,
        description: String,
        snippet: String,
        activation: {
          activationType: String,
          activationTime: Number
        }
      }
    }]
  },

  // Classes
  classes: [{
    id: Number,
    level: Number,
    isStartingClass: Boolean,
    hitDiceUsed: Number,
    definition: {
      name: String,
      description: String,
      hitDice: Number,
      classFeatures: [{
        name: String,
        description: String,
        requiredLevel: Number,
        snippet: String
      }]
    },
    subclassDefinition: {
      name: String,
      description: String
    }
  }],

  // Equipment & Items
  inventory: [{
    id: Number,
    name: String,
    quantity: Number,
    weight: Number,
    equipped: Boolean,
    definition: {
      type: String,
      damage: {
        diceCount: Number,
        diceValue: Number,
        diceString: String
      },
      properties: [String]
    }
  }],

  // Currency
  currencies: {
    cp: Number,
    sp: Number,
    gp: Number,
    ep: Number,
    pp: Number
  },

  // Spells
  spells: {
    race: [{
      name: String,
      level: Number,
      description: String
    }],
    class: [{
      name: String,
      level: Number,
      description: String
    }],
    item: [{
      name: String,
      level: Number,
      description: String
    }]
  },

  // Character Options & Preferences
  preferences: {
    useHomebrewContent: Boolean,
    showUnarmedStrike: Boolean,
    showScaledSpells: Boolean,
    abilityScoreDisplayType: Number
  }
};