export const SkillList = {
  1: {
    name: 'Weakness Exploit',
    defaultActiviation: 100,
    levels: [
      {
        rawModifier: 0,
        affinityModifier: .15,
      },
      {
        rawModifier: 0,
        affinityModifier: .30,
      },
      {
        rawModifier: 0,
        affinityModifier: .50,
      },
    ],
  },
  2: {
    name: 'Maximum Might',
    defaultActiviation: 100,
    levels: [
      {
        rawModifier: 0,
        affinityModifier: .10,
      },
      {
        rawModifier: 0,
        affinityModifier: .20,
      },
      {
        rawModifier: 0,
        affinityModifier: .30,
      },
    ]
  },
  3: {
    name: 'Attack Boost',
    defaultActiviation: 100,
    fixedActivation: true,
    levels: [
      {
        rawModifier: 3,
        affinityModifier: 0,
      },
      {
        rawModifier: 6,
        affinityModifier: 0,
      },
      {
        rawModifier: 9,
        affinityModifier: 0,
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
    ]
  },
}
