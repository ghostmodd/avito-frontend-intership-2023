import React from "react";
import "./FilterBlock.css";

type FilterBlockProps = {
  heading: string,
  optionsConfig: Array<{
    name: string,
    value: string,
  }>,
}

const FilterBlock: React.FC<FilterBlockProps> = (props) => {
  const [isSelectActive, toggleIsSelectActive] = React.useState(false);

  function handleSelectClick() {
    toggleIsSelectActive(!isSelectActive);
  }

  return (
    <>
      <select className="select-hidden">
        <option className="select__option" value="0" defaultValue={0}>{props.heading}</option>
        {
          props.optionsConfig.map((item, index) => {
            return <option className="select__option" value={item.value} key={index}>{item.name}</option>
          })
        }
      </select>


      <div className={`select ${isSelectActive && "select_active"}`}>
        <p className={`select__heading ${isSelectActive && "select__heading_active"}`}
           onClick={handleSelectClick}>{props.heading}</p>

        {
          isSelectActive
          &&
          <div className="select__options-container">
            {
              props.optionsConfig.map((item, index) => {
                return <div className="select__option-container" key={index}>
                  <label className="select__option" htmlFor={item.value}>{item.name}</label>
                  <input className="select__invisible-checkbox" id={item.value} type="checkbox"
                         checked={false} onChange={() => {
                  }}/>
                  <span className="select__checkbox"></span>
                </div>
              })
            }
          </div>
        }
      </div>
    </>
  );
}

export default FilterBlock;
