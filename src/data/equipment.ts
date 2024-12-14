interface EquipmentOption {
  name: string;
  description?: string;
}

interface EquipmentChoice {
  options: EquipmentOption[];
}

interface Spell {
  id: string;
  name: string;
  level: string;
  description: string;
}

const classEquipment: Record<string, EquipmentChoice[]> = {
  fighter: [
    {
      options: [
        {
          name: "Chain mail",
          description: "AC 16"
        },
        {
          name: "Leather armor, longbow, and 20 arrows",
          description: "AC 11 + Dex modifier"
        }
      ]
    },
    {
      options: [
        {
          name: "A martial weapon and a shield",
          description: "+2 AC from shield"
        },
        {
          name: "Two martial weapons"
        }
      ]
    },
    {
      options: [
        {
          name: "Light crossbow and 20 bolts"
        },
        {
          name: "Two handaxes"
        }
      ]
    }
  ],
  wizard: [
    {
      options: [
        {
          name: "Quarterstaff",
          description: "1d6 bludgeoning"
        },
        {
          name: "Dagger",
          description: "1d4 piercing"
        }
      ]
    },
    {
      options: [
        {
          name: "Component pouch",
          description: "For casting spells"
        },
        {
          name: "Arcane focus",
          description: "Crystal, orb, rod, staff, or wand"
        }
      ]
    }
  ],
  bloodmage: [
    {
      options: [
        {
          name: "Ritual dagger",
          description: "1d4 piercing, allows blood magic channeling"
        },
        {
          name: "Blood orb",
          description: "Arcane focus for blood magic"
        }
      ]
    },
    {
      options: [
        {
          name: "Healer's kit and bandages",
          description: "For post-ritual recovery"
        },
        {
          name: "Alchemist's supplies",
          description: "For creating blood elixirs"
        }
      ]
    }
  ]
};

const classSpells: Record<string, Spell[]> = {
  wizard: [
    {
      id: "magic-missile",
      name: "Magic Missile",
      level: "1st",
      description: "Create three glowing darts that automatically hit their targets"
    },
    {
      id: "shield",
      name: "Shield",
      level: "1st",
      description: "Create an invisible barrier of magical force"
    },
    {
      id: "mage-armor",
      name: "Mage Armor",
      level: "1st",
      description: "Create a protective magical force"
    },
    {
      id: "burning-hands",
      name: "Burning Hands",
      level: "1st",
      description: "Create a thin sheet of flames"
    }
  ],
  bloodmage: [
    {
      id: "blood-bolt",
      name: "Blood Bolt",
      level: "1st",
      description: "Channel your vitality into a devastating projectile"
    },
    {
      id: "crimson-shield",
      name: "Crimson Shield",
      level: "1st",
      description: "Create a barrier of hardened blood"
    },
    {
      id: "vitality-drain",
      name: "Vitality Drain",
      level: "1st",
      description: "Drain life force from a target to heal yourself"
    }
  ]
};

export function getStartingEquipment(classId: string): EquipmentChoice[] {
  return classEquipment[classId] || [];
}

export function getAvailableSpells(classId: string): Spell[] {
  return classSpells[classId] || [];
}