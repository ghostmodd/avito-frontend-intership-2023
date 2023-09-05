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
        this._getJSON(res);
      })
      .catch((err) => {
        console.log(err)
        if(attemptsLeft > 0) {
          this._makeRequest(url, method, attemptsLeft - 1);
        } else {
          console.log('Ошибка: не удалось выполнить запрос!');
        }
      })
  }

  getAllGames() {
    return this._makeRequest(`${this._baseUrl}/gamesApi`, 'GET', this._maxAttempts)
  }
}
