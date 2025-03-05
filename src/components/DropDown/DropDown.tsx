import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import "./style.css";

type Option = {
  value: string;
  label: string;
};
type DropDownProps = {
  options: Option[];
  label?: string;
  size: "sm" | "md" | "lg";
  containerStyles?: {
    width?: CSSProperties["width"];
    backgroundColor?: CSSProperties["backgroundColor"];
  };
  optionsContainerStyles?: {
    width?: CSSProperties["width"];
    backgroundColor?: CSSProperties["backgroundColor"];
  };
  animation?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
};

const DropDown = ({
  options,
  label = "",
  containerStyles,
  optionsContainerStyles,
  size,
  animation = false,
  isClearable = true,
  isSearchable = false,
}: DropDownProps) => {
  const [list, setList] = useState<Option[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [searchInp, setSearchInp] = useState("");
  const searchInpRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setList(options);
  }, [options]);
  useEffect(() => {
    setTimeout(() => {
      if (isOpen && searchInpRef.current) {
        searchInpRef.current.focus();
      }
    }, 10);
  }, [isOpen]);

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
    setSearchInp("");
  }
  function onOptionClick(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    val: string
  ) {
    e.stopPropagation();
    setValue(val);
    toggleIsOpen();
  }
  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInp(e.target.value);
  }
  const filteredOptions = useMemo(() => {
    if (searchInp) {
      return list.filter((data) =>
        data.label.toLowerCase().includes(searchInp.toLowerCase())
      );
    } else {
      return list;
    }
  }, [searchInp, list]);
  return (
    <div className="page">
      <div className="wrapper">
        <div
          className={`select__container select__container--${size}`}
          style={{ ...containerStyles }}
          onClick={toggleIsOpen}
        >
          {value && isClearable && (
            <span
              className="clearBtn"
              onClick={(e) => {
                e.stopPropagation();
                setValue("");
              }}
            >
              <img src="close.svg" alt="" />
            </span>
          )}
          {value ? value : label}
          <div
            style={{ ...optionsContainerStyles }}
            className={`options__container ${isOpen ? "show" : ""} ${
              animation ? "animated" : ""
            }`}
          >
            {isSearchable && (
              <div
                className="searchOption"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  ref={searchInpRef}
                  className="searchOption__input"
                  type="text"
                  placeholder="Search options.."
                  onChange={onSearchChange}
                  value={searchInp}
                />
              </div>
            )}
            {filteredOptions.length > 0 ? (
              filteredOptions.map((data, i) => {
                return (
                  <div
                    onClick={(e) => onOptionClick(e, data.label)}
                    className="option"
                    key={i}
                  >
                    {data.label}
                  </div>
                );
              })
            ) : (
              <div className="noResult">Nothing Found!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
