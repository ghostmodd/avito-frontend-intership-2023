import React, {ChangeEvent} from "react";
import "./GamesFilters.css";
import CheckboxBlock from "../CheckboxBlock/CheckboxBlock";
import {GenreOptionsConfig, PlatformOptionsConfig} from "../../utils/constants/FilterBlockParams";
import {useDispatch, useSelector} from "react-redux";
import {disableIsSorting, enableIsSorting} from "../../features/sorting/sortingSlice";
import {Button} from "antd";
import {SearchOutlined} from "@ant-design/icons";
import {RootState} from "../../store/store";
import filter from "../../utils/utils/filter";
import {setVisibleGamesCardsList} from "../../features/visibleGamesCardList/visibleGamesCardList";

const GamesFilters: React.FC = () => {
  const dispatch = useDispatch();
  const visibleGamesCardsList = useSelector((state: RootState) => state.visibleGamesCardsList);
  const filtersState = useSelector((state: RootState) => state.sorting);

  function handleCheckboxesCheck(evt: ChangeEvent<HTMLInputElement>, id: string) {
    if (evt.target.checked) {
      dispatch(enableIsSorting(id));
    } else {
      dispatch(disableIsSorting(id));
    }
  }

  enum query {
    Genre ="genre",
    Platform = "platform",
    Id = "id",
  }

  function handleFilter() {
    const queries = [];
    const keywords: string[] = [];

    if(filtersState.isSortingGenre) {
      queries.push(query.Genre);
    }
    if(filtersState.isSortingPlatform) {
      queries.push(query.Platform);
    }

    for(let key in filtersState) {
      if(key !== "isSortingGenre" && key !== "isSortingPlatform") {
        if(filtersState[key]) {
          keywords.push(key.replace("isSorting", ""));
        }
      }
    }

    const gamesList = JSON.parse(localStorage.getItem("gamesList") as unknown as string);

    if(gamesList) {
      // @ts-ignore
      const filteredArray = filter.getFilteredData(gamesList, queries, keywords);
      dispatch(setVisibleGamesCardsList(filteredArray));
    } else {
      throw Error("Произошла ошибка!");
    }
  }

  return (
    <div className="games-filters">
      <CheckboxBlock heading="жанр" optionsConfig={GenreOptionsConfig} handleCheck={handleCheckboxesCheck}/>
      <CheckboxBlock heading="платформа" optionsConfig={PlatformOptionsConfig} handleCheck={handleCheckboxesCheck}/>
      <Button icon={<SearchOutlined/>} onClick={handleFilter}>Поиск</Button>
    </div>
  )
}

export default GamesFilters;
