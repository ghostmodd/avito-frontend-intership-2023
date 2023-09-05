import React from "react";
import "./GamesFilters.css";
import FilterBlock from "../FilterBlock/FilterBlock";
import { GenreOptionsConfig, PlatformOptionsConfig } from "../../utils/constants/FilterBlockParams";

const GamesFilters: React.FC = () => {

  return (
    <div className="games-filters">
      <FilterBlock heading="жанр" optionsConfig={ GenreOptionsConfig }/>
      <FilterBlock heading="платформа" optionsConfig={ PlatformOptionsConfig }/>
    </div>
  )
}

export default GamesFilters;
