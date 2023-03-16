import React, { useState } from 'react';
import { useAutocomplete } from '../../../hooks/useAutocomplete';
import { getActiveToken } from '../../../utilities/getActiveToken';
import styles from './styles.module.css'


type inputText = {
  value?: number;
  label: string;
}

const index = (
  {
    placeholder,
    options
  }:{
    placeholder:string,
    options:[]}
  ) => {

  const {
    searchOptions,
    optionResult,
    setOptionResult,
    setShowOptions,
    setOptionList,
    showOptions,
    handleKeysSelect,
    currentIndex,
    textValue,
    optionList
  } = useAutocomplete()
  const [inputText, setInputText] = useState<inputText>(textValue)
  const [focusOption, setFocusOption] = useState(false)

  const handleInputChange:React.ChangeEventHandler<HTMLInputElement> = async(event) => {
    const {value, selectionEnd=0} = event.target
    setInputText(value)
    if (!value) {
      setOptionResult({results:[]})
      setOptionList({results:[]})
      return 
    }
    if (optionList[value]) {
      if (! optionResult?.results.length <= 0) return
    }
    const {word} = await getActiveToken(value, selectionEnd)
    await searchOptions(word)
  }

  const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    handleKeysSelect(e.code)
  }

  const handeleSetText = (value, label) => {
    setInputText({value, label})
  }

  // console.log(optionResult?.results)
  return (
    <div className={styles.container}>
      <div className={`${optionResult?.loading === false && styles.focusControl} ${styles.control}`}>
        {optionResult?.loading &&
          (
            <div className={styles.loading}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )
        }
        <input
          placeholder={placeholder}
          type='text'
          value={inputText.label}
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => {
            setShowOptions(false)
          }, 100)}
          className={styles.value_input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {/* <div className={styles.indicator}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-down" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div> */}
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_list}>
          {showOptions && optionResult?.loading===true
            ? <li>Loading</li>
            : showOptions && optionResult?.results.map(({value, label}, index) => (
              <li 
                key={value}
                onMouseEnter={() => setFocusOption(true)}
                onMouseLeave={() => setFocusOption(false)}
                onClick={() => handeleSetText(value, label)}
                className={`${currentIndex === index && styles.select} ${focusOption && styles.mouse_focus} ${styles.option}`}
              >
                {label}
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default index;