import React from "react"
import "./Promo.css"
import { HashLink as Link } from "react-router-hash-link";
import gamePad from "../../images/promo__game-pad.svg"
import { PromoProps } from "./PromoProps"

const Promo: React.FC<PromoProps> = (props) => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="cropped-rectangle static-background">
          <div className="cropped-rectangle__container">
            <h1 className="promo__heading">{props.heading}</h1>
            <p className="promo__paragraph">{props.mainText}</p>
            <Link className="promo__link-to-game-list" to="#game-list">{props.btnText}</Link>
          </div>
        </div>

        <img
          className="promo__decorative-image"
          src={gamePad}
          alt="Изображение игрового контроллера от PlayStation 5"
        />
      </div>
    </section>
  )
}

export default Promo
