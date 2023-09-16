import React from "react"
import "./GamesCardsList.css"
import GameCard from "../GameCard/GameCard"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Preloader from "../Preloader/Preloader"
import { GameCardConfig } from "../GameCard/GameCardConfig"

const GamesCardsList: React.FC = () => {
  const visibleGamesCardsList = useSelector(
    (state: RootState) => state.games.visibleGamesCardsList,
  )

  return (
    <ul className="games-cards-list">
      {visibleGamesCardsList.length > 0 &&
        visibleGamesCardsList.map((card: GameCardConfig, index: number) => {
          return (
            <li className="games-cards-list__item" key={index}>
              <GameCard
                id={card.id}
                imageLink={card.thumbnail}
                title={card.title}
                publisher={card.publisher}
                release_date={card.release_date}
                genre={card.genre}
                platform={card.platform}
                thumbnail={card.thumbnail}
              />
            </li>
          )
        })}

      {visibleGamesCardsList.length === 0 && <Preloader />}
    </ul>
  )
}

export default GamesCardsList
