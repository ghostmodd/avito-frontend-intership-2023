import React from "react";
import "./GamePage.css";
import {Layout, Carousel, Button, Progress} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import logo from "../../images/logo.svg";
import {Footer} from "antd/lib/layout/layout";
import {DotPosition} from "antd/es/carousel";
import {DownloadOutlined} from "@ant-design/icons";

const GamePage: React.FC = () => {
  const [dotPosition, setDotPosition] = React.useState<DotPosition>('bottom');

  return (
    <Layout className="black-background">
      <Header className="header">
        <a className="link" href="#">
          <img src={logo} alt="Логотип проекта"/>
        </a>
      </Header>

      <Content className="black-background">
        <section className="game-page">
          <div className="game-page__container">
            <div className="game-page__info-container">
              <div className="game-page__media-section">
                <img className="game-page__img" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                     alt="Изображение"/>
                <div className="game-page__gallery">
                  <img className="game-page__gallery-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                       alt="Изображение"/>
                  <img className="game-page__gallery-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                       alt="Изображение"/>
                  <img className="game-page__gallery-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                       alt="Изображение"/>
                  <img className="game-page__gallery-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                       alt="Изображение"/>
                </div>
              </div>
              <div className="game-page__title-section">
                <h1 className="game-page__heading">Call Of Duty: Warzone</h1>
                <p className="game-page__publisher">PC (Windows)</p>
                <p className="game-page__description">
                  A standalone free-to-play battle royale and modes accessible via Call of Duty: Modern Warfare.
                </p>
                <Button className="game-page__btn-download" type={"primary"} size="large" icon={<DownloadOutlined/>}>Загрузить</Button>
              </div>
            </div>
          </div>

          <div className="gallery">
            <h2 className="gallery__heading">Gallery</h2>
            <Carousel className="gallery__carousel" dotPosition={dotPosition} autoplay={true}>
              <div>
                <img className="gallery__carousel-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                     alt="Изображение"/>
              </div>
              <div>
                <img className="gallery__carousel-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                     alt="Изображение"/>
              </div>
              <div>
                <img className="gallery__carousel-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                     alt="Изображение"/>
              </div>
              <div>
                <img className="gallery__carousel-item" src="https:\/\/www.freetogame.com\/g\/452\/Call-of-Duty-Warzone-4.jpg"
                     alt="Изображение"/>
              </div>
            </Carousel>
          </div>
        </section>
      </Content>

      <Footer className={"footer"}>
        <nav className="menu">
          <ul className="menu__list">
            <li><a className="menu__link opacity-dim" href="https://github.com/ghostmodd/avito-frontend-intership-2023"
                   target="_blank" rel="noreferrer">О проекте</a></li>
            <li><a className="menu__link opacity-dim" href="https://github.com/ghostmodd" target="_blank"
                   rel="noreferrer">Git</a></li>
            <li><a className="menu__link opacity-dim" href="https://vk.com/satanicage" target="_blank"
                   rel="noreferrer">ВК</a></li>
            <li><a className="menu__link opacity-dim" href="https://t.me/deviatedINC" target="_blank"
                   rel="noreferrer">Telegram</a></li>
          </ul>
        </nav>
        <p className="footer__copyright">&#169; {new Date().getFullYear()}. Григорий Деревянных</p>
      </Footer>
    </Layout>
  )
}

export default GamePage;
