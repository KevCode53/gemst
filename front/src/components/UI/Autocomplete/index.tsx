import React, { useState } from 'react';
import { useAutocomplete } from '../../../hooks/useAutocomplete';
import { getActiveToken } from '../../../utilities/getActiveToken';
import styles from './styles.module.css'

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
    showOptions,
    optionList
  } = useAutocomplete()
  const [isFocus, setIsFocus] = useState(false)

  const handleInputChange:React.ChangeEventHandler<HTMLInputElement> = async(event) => {
    const {value, selectionEnd=0} = event.target
    if (!value) {return setOptionResult({results:[]}) }
    if (optionList[value]) return
    const {word} = await getActiveToken(value, selectionEnd)
    await searchOptions(word)
  }


  return (
    <div className={styles.container}>
      <div className={`${showOptions && styles.focusControl} ${styles.control}`}>
        {/* {optionResult?.loading &&
          ( */}
            <div className={styles.loading}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          {/* )
        } */}
        <input
          placeholder={placeholder}
          type='text'
          onFocus={() => setShowOptions(true)}
          onBlur={() => setTimeout(() => {
            setShowOptions(false)
          }, 500)}
          className={styles.value_input}
          onChange={handleInputChange}
        />
        <div className={styles.indicator}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-down" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="18" y1="13" x2="12" y2="19" />
            <line x1="6" y1="13" x2="12" y2="19" />
          </svg>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_list}>
          {showOptions && optionResult?.loading===true
            ? <div>Loading</div>
            : showOptions && optionResult?.results.map(({value, label}) => (
              <div key={value} className={styles.option}>
                {label}
              </div>
            ))
          }
          {/* <div key={option.value} className={styles.option}>
            {option.label}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default index;