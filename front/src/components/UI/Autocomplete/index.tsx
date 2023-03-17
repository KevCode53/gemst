// Import Styles Module
import { useState } from 'react';
import { useAutocomplete } from '../../../hooks/useAutocomplete';
import { optionsI, search } from '../../../utilities/dependencies';
import { getActiveToken } from './getActiveToken.utilities';
import styles from './styles.module.css'

const index = (
  {
    options=[],
    nameInput='input_value',
    valueInput='value',
    placeholder='select a option'
  }:{
    options:optionsI[]|[],
    nameInput: string,
    valueInput: string,
    placeholder:string
  }
) => {

  const {
    handleInputChange,
    inputText,
    showAutocomplete,
    setShowAutocomplete,
    optionResults
  } = useAutocomplete(options)

  console.log(optionResults)

  // const [inputText, setInputText] = useState<optionsI>({value:-1, label: ''})
  const [currentIndex, setCurrentIndex] = useState(-1)
  // const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [optionResults, setOptionResult] = useState({})
  const [isFocusMouseOption, setIsFocusMouseOption] = useState(false)

  // const handleInputChange:
  // React.ChangeEventHandler<HTMLInputElement>
  // = async(event) => {
  //   const {value, selectionEnd=0} = event.target
  //   setInputText({value: -1, label:value})
  //   if (!value || optionResults[value]) return

  //   const {word} = getActiveToken(value, selectionEnd)
  //   setShowAutocomplete(/\w{3,15}$/.test(word))
  //   setLoading(true)
  //   setOptionResult((prev) => ({...prev, [word]: {results:[], loading:true}}))
  //   const results = await search(word, options)
  //   setOptionResult((prev) => ({...prev, [word]: {results:results, loading:false}}))
  // }

  const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    const currentResults = optionResults[inputText.label]?.results
    if (e.code === 'ArrowDown') {
      setCurrentIndex((prev) => {
        if (prev >= (currentResults.length - 1)) {
          return prev = 0
        } else {
          return Math.min(prev + 1)
        }
      })
    } else if (e.code === 'ArrowUp') {
      setCurrentIndex((prev) => {
        if (prev <= 0) {
          return prev = currentResults.length - 1
        } else {
          return Math.min(prev - 1)
        }
      })
    } else if (e.code === 'Enter') {
      const newValue = currentResults[currentIndex]
      console.log(newValue)
      setInputText(newValue)
    }
  }

  const resultList = optionResults[inputText.label]?.results ?? []
  const isLoading = optionResults[inputText.label]?.loading

  const handleSetInputValue = (value:number, label:string) => {
    setInputText({value, label})
  }

  const handleMouseFocus:React.MouseEventHandler<HTMLLIElement> = (index) => {
    setCurrentIndex(index)
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
          name={nameInput}
          type="text"
          value={inputText.label}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={`${styles.value_input} ${showAutocomplete && styles.searching}`}
        />
        <input name={valueInput} readOnly value={inputText.value} type="number" style={{display: 'none'}} />
      </div>
      <div className={styles.menu}>
        <ul className={styles.menu_list}>
          {showAutocomplete && isLoading === true
            ? <li className={styles.loadingText}>
                <span>Loading...</span>
              </li>
            : showAutocomplete && resultList.map(({value, label}, index) => (
              <li
                onPointerEnter={() => handleMouseFocus(index)}
                key={value}
                className={`${styles.option} ${currentIndex === index && styles.focus}`}
                onClick={() => handleSetInputValue(value, label)}
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