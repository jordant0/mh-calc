export const SkillList = {
  0: {
    name: 'Critical Boost',
    defaultActiviation: 100,
    fixedActivation: true,
    levels: [1, 2, 3], // Dummy values,
    color: 'purple',
  },
  1: {
    name: 'Weakness Exploit',
    defaultActiviation: 100,
    levels: [
      {
        affinityModifier: .15,
      },
      {
        affinityModifier: .30,
      },
      {
        affinityModifier: .50,
      },
    ],
    color: 'purple',
  },
  2: {
    name: 'Maximum Might',
    defaultActiviation: 100,
    levels: [
      {
        affinityModifier: .10,
      },
      {
        affinityModifier: .20,
      },
      {
        affinityModifier: .30,
      },
    ],
    color: 'red',
  },
  3: {
    name: 'Attack Boost',
    defaultActiviation: 100,
    fixedActivation: true,
    levels: [
      {
        rawModifier: 3,
      },
      {
        rawModifier: 6,
      },
      {
        rawModifier: 9,
      },
      {
        rawModifier: 12,
        affinityModifier: 0.05,
      },
      {
        rawModifier: 15,
        affinityModifier: 0.05,
      },
      {
        rawModifier: 18,
        affinityModifier: 0.05,
      },
      {
        rawModifier: 21,
        affinityModifier: 0.05,
      },
    ],
    color: 'red',
  },
  4: {
    name: 'Critical Eye',
    defaultActiviation: 100,
    fixedActivation: true,
    levels: [
      {
        affinityModifier: 0.03,
      },
      {
        affinityModifier: 0.06,
      },
      {
        affinityModifier: 0.1,
      },
      {
        affinityModifier: 0.15,
      },
      {
        affinityModifier: 0.20,
      },
      {
        affinityModifier: 0.25,
      },
      {
        affinityModifier: 0.30,
      },
    ],
    color: 'purple',
  },
  5: {
    name: 'Agitator',
    defaultActiviation: 50,
    levels: [
      {
        rawModifier: 4,
        affinityModifier: 0.03,
      },
      {
        rawModifier: 8,
        affinityModifier: 0.06,
      },
      {
        rawModifier: 12,
        affinityModifier: 0.09,
      },
      {
        rawModifier: 16,
        affinityModifier: 0.12,
      },
      {
        rawModifier: 20,
        affinityModifier: 0.15,
      },
    ],
    color: 'red',
  },
  6: {
    name: 'Peak Performance',
    defaultActiviation: 25,
    levels: [
      {
        rawModifier: 5,
      },
      {
        rawModifier: 10,
      },
      {
        rawModifier: 15,
      },
    ],
    color: 'red',
  },
  7: {
    name: 'Critical Draw',
    defaultActiviation: 100,
    levels: [
      {
        affinityModifier: .30,
      },
      {
        affinityModifier: .60,
      },
      {
        affinityModifier: 1,
      },
    ],
    color: 'purple',
  },
  8: {
    name: 'Airborne',
    defaultActiviation: 10,
    levels: [
      {
        affinityModifier: .10,
      },
    ],
    color: 'blue',
  },
  9: {
    name: 'Latent Power',
    defaultActiviation: 30,
    levels: [
      {
        affinityModifier: .10,
      },
      {
        affinityModifier: .20,
      },
      {
        affinityModifier: .30,
      },
      {
        affinityModifier: .40,
      },
      {
        affinityModifier: .50,
      },
    ],
    color: 'red',
  },
  10: {
    name: 'Resentment',
    defaultActiviation: 10,
    levels: [
      {
        rawModifier: 5,
      },
      {
        rawModifier: 10,
      },
      {
        rawModifier: 15,
      },
      {
        rawModifier: 20,
      },
      {
        rawModifier: 25,
      },
    ],
    color: 'red',
  },
  11: {
    name: 'Non-elemental Boost',
    defaultActiviation: 100,
    fixedActivation: true,
    levels: [
      {
        rawBoost: .10,
      },
    ],
    color: 'yellow',
  },
  12: {
    name: 'Heroics',
    defaultActiviation: 10,
    levels: [
      {
        rawBoost: .05,
      },
      {
        rawBoost: .10,
      },
      {
        rawBoost: .15,
      },
      {
        rawBoost: .20,
      },
      {
        rawBoost: .30,
      },
    ],
    color: 'red',
  },
  13: {
    name: 'Affinity Sliding',
    defaultActiviation: 5,
    levels: [
      {
        affinityModifier: .30,
      },
    ],
    color: 'red',
  },
  14: {
    name: 'Fortify',
    defaultActiviation: 50,
    levels: [
      {
        rawBoost: .10,
      },
    ],
    color: 'red',
  },
}
