import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../../../resources/img/selectArrow.svg";
import { ReactComponent as Remove } from "../../../resources/img/remove.svg";

function Select({options, value, placeholder, onChange = () => {} }) {
  const [active, setActive] = useState(false);
  
  const wrapperRef = useRef(null);


  const setValue = (value) => {
    onChange && onChange(value);
  }

  const onOptionClicked = (option) => () => {
    setValue(option.value);
  };
  const selectedValue = options.find(option => option.value === value);


  useEffect(() => {
    if (active) {
      function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setActive(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [active]);
  
  return (
    <div
      ref={wrapperRef}
      onClick={() => setActive(!active)}
      className={(active ? "open" : "") + " select-dropdown position-relative"}
    >
      <button className="dropdown-button d-flex align-items-center justify-content-between position-relative w-100 h-44px h-md-34px rounded-sm border-solid-1 border-gray-350 bg-white px-12px px-md-8px px-m-12px mb-8px mb-md-2px mb-lg-4px">
        <span className="dropdown-text font-size-12 text-gray-400 text-line-1">
          {(selectedValue && selectedValue.label) || placeholder || ''}
        </span>
        {selectedValue ? (
          <span className="clear-arrow " onClick={e =>{
            e.preventDefault();
            e.stopPropagation();
            setValue(null)
          }}>
            <Remove />
          </span>
        ) : (
          <span className="dropdown-arrow ">
            <Arrow />
          </span>
        )}
      </button>
      {active && (
        <div className="dropdown-box bg-white w-100 position-absolute top-100 mt-2px z-index-1 rounded-xs overflow-hidden border-gray-200">
          <div className="dropdown-scroll mb-4px">
            <ul className="dropdown-list">
              {options.map((option, index) => (
                <li onClick={onOptionClicked(option)} key={index}>
                  <span className="d-flex align-items-center h-34px px-12px font-size-12 text-gray-400 hover-bg-gray-100 cursor-pointer">
                  {option.label}
                  {/* {option.value} */}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default Select;
