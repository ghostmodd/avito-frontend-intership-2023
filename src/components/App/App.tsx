import React from "react"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import Main from "../Main/Main"
import mainApi from "../../utils/api/MainApi"
import GamePage from "../GamePage/GamePage"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import {
  setGamesCardsList,
  setVisibleGamesCardsList,
} from "../../features/gamesCardsListSlice/gamesCardsListSlice"

const App: React.FC = () => {
  const gamesCardsList = useSelector(
    (state: RootState) => state.games.gamesCardsList,
  )
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (gamesCardsList.length === 0) {
      mainApi
        .getGamesList()
        .then((res) => {
          dispatch(setGamesCardsList(res))
          dispatch(setVisibleGamesCardsList(res))
        })
        .catch((err) => {
          console.log("Ошибка: " + err)
        })
    }
  })

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/games/:id" element={<GamePage />} />
    </Routes>
  )
}

export default App
