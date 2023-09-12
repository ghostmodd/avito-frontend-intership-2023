type OptionsConfig = Array<{
  name: string,
  id: string,
  queryKeyWord: string,
}>;

const GenreOptionsConfig: OptionsConfig = [
  {
    name: "шутеры",
    id: "Shooter",
    queryKeyWord: "Shooter",
  },
  {
    name: "стратегии",
    id: "Strategy",
    queryKeyWord: "Strategy",
  },
  {
    name: "спортивные",
    id: "Sports",
    queryKeyWord: "Sports"
  },
  {
    name: "ммо рпг",
    id: "MMORPG",
    queryKeyWord: "MMORPG",
  },
];

const PlatformOptionsConfig: OptionsConfig = [
  {
    name: "пк",
    id: "PC",
    queryKeyWord: "PC (Windows)",
  },
  {
    name: "браузер",
    id: "Web",
    queryKeyWord: "PC (Windows)",
  },
];

export {GenreOptionsConfig, PlatformOptionsConfig}
