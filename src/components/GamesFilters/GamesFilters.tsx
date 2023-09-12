import React, { ChangeEvent } from "react"
import "./GamesFilters.css"
import CheckboxBlock from "../CheckboxBlock/CheckboxBlock"
import {
  GenreOptionsConfig,
  PlatformOptionsConfig,
} from "../../utils/constants/FilterBlockParams"
import { useDispatch, useSelector } from "react-redux"
import {
  enableIsFiltering,
  disableIsFiltering,
} from "../../features/filtering/filteringSlice"
import { Button } from "antd"
import { SearchOutlined } from "@ant-design/icons"
import { RootState } from "../../store/store"
import filter from "../../utils/utils/filter"
import { setVisibleGamesCardsList } from "../../features/gamesCardsListSlice/gamesCardsListSlice"
import { FilterConfig } from "../../utils/utils/FilterConfig"

const GamesFilters: React.FC = () => {
  const dispatch = useDispatch()
  const gamesList = useSelector(
    (state: RootState) => state.games.gamesCardsList,
  )
  const filterState = useSelector((state: RootState) => state.filtering)

  function handleCheckboxesCheck(
    evt: ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    if (evt.target.checked) {
      dispatch(enableIsFiltering(id))
    } else {
      dispatch(disableIsFiltering(id))
    }
  }

  /**
   * Функция обрабатывает нажатие на кнопку фильтрации.
   * Результат срабатывания функции - обновление стэйт переменной "visibleGamesCardsList"
   */
  function handleFilter() {
    // Готовим конфигурационный файл
    const filterConfig: FilterConfig = {
      genre: [],
      platform: [],
    }

    // Запускаем цикл по стэйт переменной 'filterState'
    // Задача цикла - записать ключевые слова в нужные для фильтрации свойства
    // @todo Текущее решение трудно поддерживается. Надо будет еще раз подумать над реализацией
    for (let key in filterState) {
      if (
        (key === "isSortingShooter" ||
          key === "isSortingStrategy" ||
          key === "isSortingSports" ||
          key === "isSortingMMORPG") &&
        filterState[key]
      ) {
        filterConfig.genre.push(key.replace("isSorting", ""))
      } else if (
        (key === "isSortingPC" || key === "isSortingWeb") &&
        filterState[key]
      ) {
        filterConfig.platform.push(key.replace("isSorting", ""))
      }
    }

    // Обновляем значение стэйт переменной
    dispatch(
      setVisibleGamesCardsList(filter.getFilteredData(gamesList, filterConfig)),
    )
  }

  return (
    <div className="games-filters">
      <CheckboxBlock
        heading="жанр"
        optionsConfig={GenreOptionsConfig}
        handleCheck={handleCheckboxesCheck}
      />
      <CheckboxBlock
        heading="платформа"
        optionsConfig={PlatformOptionsConfig}
        handleCheck={handleCheckboxesCheck}
      />
      <Button icon={<SearchOutlined />} onClick={handleFilter}>
        Поиск
      </Button>
    </div>
  )
}

export default GamesFilters
