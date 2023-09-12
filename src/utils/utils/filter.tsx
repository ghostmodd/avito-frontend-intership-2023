import { GameCardConfig } from "../../components/GameCard/GameCardConfig"
import { FilterConfig } from "./FilterConfig"

/**
 * Класс содержит внутренние методы для фильтрации данных. В конструктор ничего не принимает.
 * При создании готовит поля "_gamesCardsList" и "_filterConfig" для последующей записи.
 */
class Filter {
  public _gamesCardsList: Array<GameCardConfig>
  public _filterConfig: FilterConfig

  constructor() {
    this._gamesCardsList = []
    this._filterConfig = {
      genre: [""],
      platform: [""],
    }
  }

  /**
   * Функция осуществляет фильтрацию данных.
   * @return Массив с отфильтрованными данными.
   */
  _filter() {
    // Создается временная переменная для записи результата фильтрации
    let filteredArray: Array<GameCardConfig>

    // Проходим исходные данные методом 'filter'
    filteredArray = this._gamesCardsList.filter((card) => {
      // Создаем переменную, которая будет наполняться boolean значениями
      // Каждое значение показывает, соответствует ли карточка условию фильтра
      const doesFulfilConditions: boolean[] = []

      // Запускаем цикл, который будет проходиться по ключевым словам
      for (let key in this._filterConfig) {
        if (
          this._filterConfig[key as unknown as keyof FilterConfig].length === 0
        ) {
          continue
        }

        // Проверяем, соответствует ли карточка хотя бы одному из условий
        const isSuitable = this._filterConfig[
          key as unknown as keyof FilterConfig
        ].some((keyword) => {
          return card[key as unknown as keyof GameCardConfig]
            .toString()
            .includes(keyword)
        })

        doesFulfilConditions.push(isSuitable)
      }

      return doesFulfilConditions.every((item) => item)
    })

    return filteredArray
  }

  /**
   * Функция вызывает внутренние методы и возвращает массив отфильтрованных данных.
   * @param {Array<GameCardConfig>} gamesCardsList Массив с исходными данными. Обязательный параметр.
   * @param {FilterConfig} filterConfig Объект с настройками фильтрации следующего формата:
   * * Ключ - название свойства исходного объекта, которое подлежит фильтрации. Например, "genre"
   * * Значение - или ключевое слово - массив, содержащий допустимые значения фильтруемого свойства. Например, "Shooter"
   *
   * @return Массив с отфильтрованными данными
   */
  getFilteredData(
    gamesCardsList: Array<GameCardConfig>,
    filterConfig: FilterConfig,
  ) {
    // Записываем аргументы в свойства класса
    this._gamesCardsList = gamesCardsList
    this._filterConfig = filterConfig

    // Запускаем внутренний метод фильтрации данных
    return this._filter()
  }
}

const filter = new Filter()
export default filter
