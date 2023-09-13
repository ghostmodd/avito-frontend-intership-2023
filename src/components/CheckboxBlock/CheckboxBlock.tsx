import React, { ChangeEvent } from "react"
import "./CheckboxBlock.css"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { CheckboxBlockProps } from "./CheckboxBlockProps"

const CheckboxBlock: React.FC<CheckboxBlockProps> = (props) => {
  const [isSelectActive, toggleIsSelectActive] = React.useState(false)
  const checkboxState = props.optionsConfig.map((item, index) => {
    // хук используется в коллбеке, поскольку необходимо завернуть его в массив для дальнейшей обработки
    // @todo подумать над переделкой в кастомный хук
    return useSelector(
      (state: RootState) => state.filtering[`isSorting${item.id}`],
    )
  })

  function handleSelectClick() {
    toggleIsSelectActive(!isSelectActive)
  }

  return (
    <>
      <select className="select-hidden">
        <option className="select__option" value="0" defaultValue={0}>
          {props.heading}
        </option>
        {props.optionsConfig.map((item, index) => {
          return (
            <option className="select__option" value={item.id} key={index}>
              {item.name}
            </option>
          )
        })}
      </select>

      <div className={`select ${isSelectActive && "select_active"}`}>
        <p
          className={`select__heading ${
            isSelectActive && "select__heading_active"
          }`}
          onClick={handleSelectClick}
        >
          {props.heading}
        </p>

        {isSelectActive && (
          <div className="select__options-container">
            {props.optionsConfig.map((item, index) => {
              return (
                <div className="select__option-container" key={index}>
                  <label className="select__option" htmlFor={item.id}>
                    {item.name}
                  </label>
                  <input
                    className="select__invisible-checkbox"
                    id={item.id}
                    type="checkbox"
                    checked={checkboxState[index]}
                    onChange={(evt: ChangeEvent) =>
                      props.handleCheck(evt, item.id)
                    }
                  />
                  <label htmlFor={item.id} className="select__checkbox"></label>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default CheckboxBlock
