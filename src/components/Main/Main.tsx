import React from "react";
import "./Main.css";
import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import logo from "../../images/logo.svg";
import Promo from "../Promo/Promo";
import Section from "../Section/Section";
import GamesCardsList from "../GamesCardsList/GamesCardsList";
import GamesFilters from "../GamesFilters/GamesFilters";
import { Footer } from "antd/lib/layout/layout";

const Main: React.FC = () => {
  return (
    <Layout className="main-background">
      <Header className="header">
        <a className="link" href="#">
          <img src={logo} alt="Логотип проекта"/>
        </a>
      </Header>

      <Content>
        <Promo heading="Лучшие бесплатные игры"
               mainText="Отслеживайте, во что вы играли, и ищите, во что сыграть дальше!" btnText="Найти игру"/>

        <Section className="additional-background" id="game-list" heading="Список игр">
          <GamesFilters/>

          <GamesCardsList />
        </Section>
      </Content>

      <Footer className={"footer"}>
        <nav className="menu">
          <ul className="menu__list">
            <li><a className="menu__link opacity-dim" href="https://github.com/ghostmodd/avito-frontend-intership-2023" target="_blank" rel="noreferrer">О проекте</a></li>
            <li><a className="menu__link opacity-dim" href="https://github.com/ghostmodd" target="_blank" rel="noreferrer">Git</a></li>
            <li><a className="menu__link opacity-dim" href="https://vk.com/satanicage" target="_blank" rel="noreferrer">ВК</a></li>
            <li><a className="menu__link opacity-dim" href="https://t.me/deviatedINC" target="_blank" rel="noreferrer">Telegram</a></li>
          </ul>
        </nav>
        <p className="footer__copyright">&#169; {new Date().getFullYear()}. Григорий Деревянных</p>
      </Footer>
    </Layout>
  )
}

export default Main;
