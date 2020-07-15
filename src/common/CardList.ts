import { Card } from './Card'

const CardList: { [id: string]: Card } = {
  blaster: {
    name: 'Blaster',
    text: ':attack:',
    effect: {
      attack: 1
    }
  },
  shields: {
    name: 'Shields',
    text: ':shield:',
    effect: {
      shield: 1
    }
  },
  plasma_blaster: {
    name: 'Plasma Blaster',
    cost: 3,
    text: ':attack: :attack:',
    effect: {
      attack: 2
    }
  },
  phase_shielding: {
    name: 'Phase Shielding',
    cost: 3,
    text: '2 :shield:',
    effect: {
      shield: 2
    }
  },
  evasive_maneuvers: {
    name: 'Evasive Maneuvers',
    cost: 5,
    text: '4 :shield:',
    effect: {
      shield: 4,
      discard_chosen: 1
    }
  },
  rapid_prototyping: {
    name: 'Rapid Prototyping',
    cost: 7,
    text: 'You may scrap a card. If you do, add an equipment card from the Exchange to your discard pile.',
    effect: {
      scrap_chosen_to_acquire: 1
    }
  }
}
export { CardList }
