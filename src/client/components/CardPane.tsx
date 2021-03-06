import React from 'react'
import { Card } from '@/common/Card'
import { AppCard } from './AppCard'

interface IProps {
  cards: Card[]
  playCard: (index: number) => void
}

function CardPane (props: IProps): React.ReactElement<IProps> {
  return (
    <div className="right-column">
      {
        props.cards.map((card, index) => (
          <AppCard
            key={index}
            name={card.name}
            cost={card.cost}
            text={card.text}
            handlePlayCard={(_e) => props.playCard(index)}
          />
        ))
      }
    </div>
  )
}
CardPane.displayName = 'CardPane'
export { CardPane }
