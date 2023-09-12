import React from "react";
import "./GamesCardsList.css";
import GameCard from "../GameCard/GameCard";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";


type cardProps = {
    id: number,
    thumbnail: string,
    title: string,
    publisher: string,
    release_date: string,
    genre: string,
    platform: string,
};

const GamesCardsList: React.FC = () => {
  const visibleGamesCardsList = useSelector((state: RootState) => state.visibleGamesCardsList);

  return (
    <ul className="games-cards-list">
      {visibleGamesCardsList.length > 0
        &&
        visibleGamesCardsList.map((card: cardProps, index: number) => {
        return (
          <li className="games-cards-list__item" key={index}>
            <GameCard id={card.id} imageLink={card.thumbnail} title={card.title} publisher={card.publisher}
                      release_date={card.release_date} genre={card.genre} platform={card.platform} />
          </li>
        )
      })}
    </ul>
  )
}

export default GamesCardsList;
