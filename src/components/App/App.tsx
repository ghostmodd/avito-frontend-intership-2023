import React from "react";
import "./App.css"
import Main from "../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import mainApi from "../../utils/api/MainApi";
import {setVisibleGamesCardsList} from "../../features/visibleGamesCardList/visibleGamesCardList";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

const App: React.FC = () => {
  const visibleGamesCardsList = useSelector((state: RootState) => state.visibleGamesCardsList);
  const [gamesListLocalStorage, setGamesListLocalStorage] = useLocalStorage("gamesList");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(gamesListLocalStorage.length === 0) {
      mainApi.getGamesList()
        .then((res) => {
          setGamesListLocalStorage(res);
        })
        .catch((err) => {
          console.log("Ошибка: " + err);
        })
    } else {
      dispatch(setVisibleGamesCardsList(gamesListLocalStorage));
    }
  }, []);

  return (
    <>
      <Main/>
    </>
  )
}

export default App
