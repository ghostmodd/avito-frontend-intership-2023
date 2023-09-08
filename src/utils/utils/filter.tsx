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


enum query {
  Genre = "genre",
  Platform = "platform",
  Id = "id",
}

class Filter {
  private _gamesCardsList: Array<cardProps>;
  private _queries: Array<query>;
  private _keywords: Array<string | undefined>;

  constructor() {
    this._gamesCardsList = [];
    this._queries = [query.Id];
    this._keywords = [undefined];
  }

  _filter() {
    const results: Array<cardProps> = [];

    this._queries.forEach((query) => {
      if (results.length === 0) {
        this._gamesCardsList.forEach((card) => {
          this._keywords.forEach((keyword) => {
            // @ts-ignore
            if (card[query].includes(keyword)) {
              results.push(card);
            }
          })
        })
      } else {
        results.forEach((card) => {
          this._keywords.forEach((keyword) => {
            // @ts-ignore
            if (!card[query].includes(keyword)) {
              results.splice(results.indexOf(card), results.length);
            }
          })
        })
      }
    })
    return results;
  }

  getFilteredData(gamesCardsList: Array<cardProps>, queries: query[], keywords: string[]) {
    this._gamesCardsList = gamesCardsList;
    this._queries = queries;
    this._keywords = keywords;
    console.log(keywords)

    return this._filter();
  }
}

const filter = new Filter();
export default filter;
