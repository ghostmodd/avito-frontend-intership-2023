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
import {
  setVisibleGamesCardsList,
} from "../../features/visibleGamesCardList/visibleGamesCardList";

const GamesFilters: React.FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const gamesList = JSON.parse(localStorage.getItem("gamesList"));
  const filterState = useSelector((state: RootState) => state.sorting);

  function handleCheckboxesCheck(evt: ChangeEvent<HTMLInputElement>, id: string) {
    if (evt.target.checked) {
      dispatch(enableIsSorting(id));
    } else {
      dispatch(disableIsSorting(id));
    }
  }

  type filterConfig = {
    genre: Array<string | undefined>,
    platform: Array<string | undefined>,
  }

  // @todo перенести тип в отдельный файл и импортировать оттуда
  function handleFilter() {
    const filterConfig: filterConfig = {
      genre: [],
      platform: [],
    };

    for (let key in filterState) {
      if ((key === "isSortingShooter" || key === "isSortingStrategy" || key === "isSortingSports" || key === "isSortingMMORPG") && filterState[key]) {
        filterConfig.genre.push(key.replace("isSorting", ""));
      } else if((key === "isSortingPC" || key === "isSortingWeb") && filterState[key]) {
        filterConfig.platform.push(key.replace("isSorting", ""));
      }
    }

    // @ts-ignore
    dispatch(setVisibleGamesCardsList(filter.getFilteredData(gamesList, filterConfig)))
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
