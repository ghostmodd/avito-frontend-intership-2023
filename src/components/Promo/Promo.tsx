import React from "react"
import "./Promo.css"
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
            <a href="#game-list" className="promo__link-to-game-list link">
              {props.btnText}
            </a>
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
