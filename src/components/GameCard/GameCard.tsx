import React from "react";
import "./GameCard.css";
import {Card, Button, Progress} from "antd";
import {DownloadOutlined} from "@ant-design/icons"
import {useNavigate} from "react-router-dom";

type GameCardProps = {
  id: number,
  imageLink: string,
  title: string,
  publisher: string,
  release_date: string,
  genre: string,
  platform: string,
};

const GameCard: React.FC<GameCardProps> = (props) => {
  const navigate = useNavigate();
  const [isDownloading, toggleIsDownloading] = React.useState(false);

  function handleDownload() {
    toggleIsDownloading(!isDownloading);
  }

  function handleLinkToGamePage() {
    navigate(`/games/${props.id}`);
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }

  return (
    <Card
      hoverable
      className="game-card"
      cover={<img alt={`Постер игры "${props.title}"`} src={props.imageLink} onClick={handleLinkToGamePage}/>}
    >
      <div className="game-card__info-container">
        <div className="game-card__title-container">
          <h3 className="game-card__title">{props.platform}</h3>
          <p className="game-card__publisher">{props.publisher}</p>
        </div>

        <div className="game-card__description-container">
          <p className="game-card__description">Жанр: {props.genre}</p>
          <p className="game-card__description">Дата релиза: {props.release_date}</p>
        </div>

        {
          isDownloading ?
            <Button color="green" onClick={handleDownload}>
              <Progress type={"line"} percent={30}/>
            </Button>
            :
            <Button type={"primary"} icon={<DownloadOutlined/>} onClick={handleDownload}>Загрузить</Button>
        }
      </div>
    </Card>
  )
}

export default GameCard;
