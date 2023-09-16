import { GameCardConfig } from "../../components/GameCard/GameCardConfig"

export type gamesCardsListInitialStateInterface = {
  gamesCardsList: Array<GameCardConfig>
  visibleGamesCardsList: Array<Array<GameCardConfig>>
}
