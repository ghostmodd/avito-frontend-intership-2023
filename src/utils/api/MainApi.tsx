class MainApi {
  private readonly _baseUrl: string;
  private _headers: {};
  private readonly _maxAttempts: number;

  constructor(baseUrl: string, headers: {}, maxAttempts: number) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._maxAttempts = maxAttempts;
  }

  _getError(res: any) {
    if (!res.ok) {
      return res.status;
    }
  }

  _getJSON(res: any) {
    if (res.ok) {
      return res.json();
    }

    return this._getError(res);
  }

  _makeRequest(url: string, method: string, attemptsLeft: number) {
    return fetch(url, {
      headers: this._headers,
      method: method,
    })
      .then((res) => {
        return this._getJSON(res);
      })
      .catch((err) => {
        console.log(err)
        if (attemptsLeft > 0) {
          this._makeRequest(url, method, attemptsLeft - 1);
        } else {
          console.log('Ошибка: не удалось выполнить запрос!');
        }
      })
  }

  getGamesList() {
    return this._makeRequest(`${this._baseUrl}/games`, 'GET', this._maxAttempts)
  }

  getGameById(id: number) {
    return this._makeRequest(`${this._baseUrl}/game?id=${id}`, 'GET', this._maxAttempts)
  }
}

const mainApi = new MainApi(
  'https://free-to-play-games-database.p.rapidapi.com/api',
  {
    'X-RapidAPI-Key': 'd461bc3a80msha453b1d753f5364p1d8851jsnc323850d6d60',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  },
  2
);

export default mainApi;
