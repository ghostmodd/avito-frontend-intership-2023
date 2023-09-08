type OptionsConfig = Array<{
  name: string,
  id: string,
}>;

const GenreOptionsConfig: OptionsConfig = [
  {
    name: "шутеры",
    id: "Shooter",
  },
  {
    name: "стратегии",
    id: "Strategy",
  },
  {
    name: "спортивные",
    id: "Sports",
  },
  {
    name: "ммо рпг",
    id: "MMORPG",
  },
];

const PlatformOptionsConfig: OptionsConfig = [
  {
    name: "пк",
    id: "PC",
  },
  {
    name: "браузер",
    id: "Web",
  },
];

export {GenreOptionsConfig, PlatformOptionsConfig}
