type OptionsConfig = Array<{
  name: string,
  value: string,
}>;

const GenreOptionsConfig: OptionsConfig = [
  {
    name: "шутер",
    value: "shooter",
  },
  {
    name: "стратегия",
    value: "strategy",
  },
  {
    name: "ужас",
    value: "horror",
  },
  {
    name: "ммо рпг",
    value: "mmorpg",
  },
];

const PlatformOptionsConfig: OptionsConfig = [
  {
    name: "пк",
    value: "PC",
  },
  {
    name: "браузер",
    value: "browser",
  },
  {
    name: "мобильный телефон",
    value: "mobile",
  },
];

export {GenreOptionsConfig, PlatformOptionsConfig}
