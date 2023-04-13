import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

export const SearchBar = ({
  selectedValue,
  setSelectedValue,
  onHandleSearch,
}) => {
  const [hidden, setHidden] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      onHandleSearch(inputValue);
    }
  };

  return (
    <>
      <div className={styles.search_bar_container}>
        <form
          className={styles.search_form}
          onSubmit={(e) => onHandleSubmit(e)}
        >
          <input
            type="text"
            className={styles.search_input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search characters, episodes, locations..."
          />

          <div className={styles.buttons}>
            
            <div className={styles.DropDownContainer}>
              <div className={styles.DropDownHeader} onClick={()=>setHidden(!hidden)}>
                <a>{selectedValue}</a>
                {/* <FiChevronRight className={styles.icon}/> */}
                {!hidden ? (<FiChevronRight className={styles.icon} />) : (<FiChevronDown className={styles.icon} />)}
              </div>
              {hidden && (
                <div className={styles.DropDownListContainer}>
                  <ul className={styles.DropDownList}>
                      <li className={styles.ListItem} onClick={(e)=>setSelectedValue(e.target.textContent)} key={Math.random()}>
                        Characters
                      </li>
                      <li className={styles.ListItem} onClick={(e)=>setSelectedValue(e.target.textContent)} key={Math.random()}>
                        Locations
                      </li>
                      <li className={styles.ListItem} onClick={(e)=>setSelectedValue(e.target.textContent)} key={Math.random()}>
                        Episodes
                      </li>
                      <li className={styles.ListItem} onClick={(e)=>setSelectedValue(e.target.textContent)} key={Math.random()}>
                        Search
                      </li>
                  </ul>
                </div>
              )}
            </div>

            <button className={styles.button} type="submit">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


{/* <div
              className={styles.select}
              onMouseOver={() => setHidden(true)}
              onMouseLeave={() => setHidden(false)}
              onClick={() => setHidden(!hidden)}
            >
              <b className={styles.search_select}>
                {selectedValue}

                {!hidden ? (
                  <FiChevronRight className={styles.icon} />
                ) : (
                  <FiChevronDown className={styles.icon} />
                )}
              </b>
              {hidden ? (
                <div style={{ hidden: hidden }} className={styles.options}>
                  <p
                    className={styles.option}
                    onClick={(e) => (
                      setSelectedValue(e.target.textContent), setHidden(false)
                    )}
                  >
                    Character
                  </p>
                  <p
                    className={styles.option}
                    onClick={(e) => (
                      setSelectedValue(e.target.textContent), setHidden(false)
                    )}
                  >
                    Episode
                  </p>
                  <p
                    className={styles.option}
                    onClick={(e) => (
                      setSelectedValue(e.target.textContent), setHidden(false)
                    )}
                  >
                    Location
                  </p>
                </div>
              ) : (
                ""
              )}
            </div> */}