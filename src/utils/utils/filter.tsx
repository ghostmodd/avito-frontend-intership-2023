import {CardProps} from "antd";

type cardProps = {
  id: number,
  thumbnail: string,
  title: string,
  publisher: string,
  release_date: string,
  genre: string,
  platform: string,
};


type filterConfig = {
  genre: Array<string>,
  platform: Array<string>,
}

class Filter {
  private _gamesCardsList: Array<cardProps>;
  private _filterConfig: filterConfig;

  constructor() {
    this._gamesCardsList = [];
    this._filterConfig = {
      genre: [""],
      platform: [""],
    };
  }

  _filter() {
    let filteredArray: Array<cardProps> = [];

    filteredArray = this._gamesCardsList.filter((card) => {
      const filterResults = [];
      for (let key in this._filterConfig) {
        if (this._filterConfig[key as unknown as keyof filterConfig].length === 0) {
          continue;
        }

        filterResults.push(this._filterConfig[key as unknown as keyof filterConfig].some((keyword) => {
          return card[key as unknown as keyof cardProps].toString().includes(keyword);
        }));
      }

      return filterResults.every(item => item == true)
    });

    return filteredArray;
  }

  getFilteredData(gamesCardsList: Array<cardProps>, filterConfig: filterConfig) {
    this._gamesCardsList = gamesCardsList;
    this._filterConfig = filterConfig;

    return this._filter();
  }
}

const filter = new Filter();
export default filter;
