// Import Styles Module
import { useState } from 'react';
import { search } from '../../../utilities/dependencies';
import { getActiveToken } from '../../../utilities/getActiveToken';
import styles from './styles.module.css'

const index = () => {
  const [inputText, setInputText] = useState({label: ''})
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [optionResults, setOptionResult] = useState({})
  const [isFocusMouseOption, setIsFocusMouseOption] = useState(false)

  const handleInputChange:
  React.ChangeEventHandler<HTMLInputElement> 
  = async(event) => {
    const {value, selectionEnd=0} = event.target
    setInputText({label:value})
    if (!value || optionResults[value]) return

    const {word} = getActiveToken(value, selectionEnd)
    setShowAutocomplete(/\w{3,15}$/.test(word))
    setLoading(true)
    setOptionResult((prev) => ({...prev, [word]: {results:[], loading:true}}))
    const results = await search(word)
    setOptionResult((prev) => ({...prev, [word]: {results:results, loading:false}}))
  }

  const handleKeyDown = () => {
    
  }

  const resultList = optionResults[inputText.label]?.results ?? []
  const isLoading = optionResults[inputText.label]?.loading

  const handleSetInputValue = (value:number, label:string) => {
    setInputText({label})
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.control}>
        {isLoading &&
          (
            <div className={styles.loading}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )
        }
        <input 
          type="text"
          value={inputText.label}
          onChange={handleInputChange}
          className={`${styles.value_input}`}
        />
        <input type="number" style={{display: 'none'}} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_list}>
          {showAutocomplete && isLoading === true 
            ? <li>loading</li>
            : showAutocomplete && resultList.map(({value, label}, index) => (
              <li
                onMouseEnter={() => setIsFocusMouseOption(true)}
                onMouseLeave={() => setIsFocusMouseOption(false)}
                key={value}
                className={`${styles.option} ${isFocusMouseOption && styles.focus}`}
                onClick={() => handleSetInputValue(value, label)}
              >{label}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default index;