import React from "react"
import "./GamePage.css"
import { Layout, Carousel, Button } from "antd"
import { Content, Header } from "antd/es/layout/layout"
import { Footer } from "antd/lib/layout/layout"
import { DotPosition } from "antd/es/carousel"
import { DownloadOutlined } from "@ant-design/icons"
import mainApi from "../../utils/api/MainApi"
import { useParams } from "react-router-dom"
import logo from "../../images/logo.svg"

const GamePage: React.FC = () => {
  const gameId = useParams()
  const [gameData, setGameData] = React.useState({
    id: 0,
    title: "",
    publisher: "",
    short_description: "",
    thumbnail: "",
    screenshots: [
      {
        id: 0,
        image: "",
      },
    ],
  })
  const [dotPosition, setDotPosition] = React.useState<DotPosition>("bottom")

  React.useEffect(() => {
    if (!gameData.id) {
      mainApi
        .getGameById(Number(gameId.id))
        .then((res) => {
          setGameData(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  })

  return (
    <Layout className="black-background">
      <Header className="header">
        <a className="link" href="/">
          <img src={logo} alt="Логотип проекта" />
        </a>
      </Header>

      <Content className="black-background">
        <section className="game-page">
          <div className="game-page__container">
            <div className="game-page__info-container">
              <div className="game-page__media-section">
                <img
                  className="game-page__img"
                  src={gameData.thumbnail}
                  alt="Изображение"
                />
                <div className="game-page__gallery">
                  {gameData.screenshots.map((screenshot) => {
                    return (
                      <img
                        className="game-page__gallery-item"
                        src={screenshot.image}
                        alt={`Изображение из игры ${gameData.title}`}
                        key={screenshot.id}
                      />
                    )
                  })}
                </div>
              </div>
              <div className="game-page__title-section">
                <h1 className="game-page__heading">{gameData.title}</h1>
                <p className="game-page__publisher">{gameData.publisher}</p>
                <p className="game-page__description">
                  {gameData.short_description}
                </p>
                <Button
                  className="game-page__btn-download"
                  type={"primary"}
                  size="large"
                  icon={<DownloadOutlined />}
                >
                  Загрузить
                </Button>
              </div>
            </div>
          </div>

          <div className="gallery">
            <h2 className="gallery__heading">Gallery</h2>
            <Carousel
              className="gallery__carousel"
              dotPosition={dotPosition}
              autoplay={true}
            >
              {gameData.screenshots.map((screenshot) => {
                return (
                  <div>
                    <img
                      className="gallery__carousel-item"
                      src={screenshot.image}
                      alt={`Изображение из игры ${gameData.title}`}
                      key={screenshot.id}
                    />
                  </div>
                )
              })}
            </Carousel>
          </div>
        </section>
      </Content>

      <Footer className={"footer"}>
        <nav className="menu">
          <ul className="menu__list">
            <li>
              <a
                className="menu__link opacity-dim"
                href="https://github.com/ghostmodd/avito-frontend-intership-2023"
                target="_blank"
                rel="noreferrer"
              >
                О проекте
              </a>
            </li>
            <li>
              <a
                className="menu__link opacity-dim"
                href="https://github.com/ghostmodd"
                target="_blank"
                rel="noreferrer"
              >
                Git
              </a>
            </li>
            <li>
              <a
                className="menu__link opacity-dim"
                href="https://vk.com/satanicage"
                target="_blank"
                rel="noreferrer"
              >
                ВК
              </a>
            </li>
            <li>
              <a
                className="menu__link opacity-dim"
                href="https://t.me/deviatedINC"
                target="_blank"
                rel="noreferrer"
              >
                Telegram
              </a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">
          &#169; {new Date().getFullYear()}. Григорий Деревянных
        </p>
      </Footer>
    </Layout>
  )
}

export default GamePage
