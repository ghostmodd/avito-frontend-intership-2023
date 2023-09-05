import React from "react";
import "./GamesCardsList.css";
import GameCard from "../GameCard/GameCard";


type GamesCardsListProps = {
  cardsList: Array<{
    id: number,
    thumbnail: string,
    title: string,
    publisher: string,
    release_date: string,
    genre: string,
  }>,
};

const GamesCardsList: React.FC<GamesCardsListProps> = (props) => {
  return (
    <ul className="games-cards-list">
      {props.cardsList.map((card) => {
        return (
          <li className="games-cards-list__item" key={card.id}>
            <GameCard imageLink={card.thumbnail} title={card.title} publisher={card.publisher}
                      release_date={card.release_date} genre={card.genre}/>
          </li>
        )
      })}
    </ul>
  )
}

export default GamesCardsList;
