import React from "react";
import "./Section.css";

type SectionProps = {
  className: string,
  id: string,
  heading: string,
  children: React.ReactNode,
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <section className={`section ${props.className}`} id={props.id}>
      <div className="section__container">
        <h2 className="section__heading">{props.heading}</h2>
        {props.children}
      </div>
    </section>
  )
}

export default Section;
