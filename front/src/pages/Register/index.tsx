import Select from 'react-select'

// Import Interfaces
import { dependencieI } from '../../utilities/dependencies';

// Import Styles Modules
import styles from './styles.module.css'

import { dependencies, search } from '../../utilities/dependencies';
import React, { useRef, useState } from 'react';
import { getActiveToken } from '../../utilities/getActiveToken';

interface optionsI {
  loading: boolean,
  options: dependencieI
}

const index = () => {
  const [inputValue, setInputValue] = useState<dependencieI>({value: undefined, label: undefined})
  const [optionsLength, setOptionLength] = useState(-1)
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [currentIndex, setCurrenIndex] = useState(-1)
  const [options, setOptions] = useState<object>({})

  const handleInputChange:React.ChangeEventHandler<HTMLInputElement> = async(event) => {
    const {value, selectionEnd = 0} = event.target
    setInputValue({value: undefined, label:value})

    if (!value || options[value]) {
      return
    }
    const { word } = getActiveToken(value, selectionEnd)
    const shouldOpenAutocomplete = /\w{3,15}$/.test(word)

    setOptions((prev) => ({...prev, [word]: {options: [], loading: true}}))
    const results = await search(word)
    setOptions((prev) => ({...prev, [word]: {options: results, loading: false}}))
    setOptionLength(options[inputValue.label]?.options.length)
    // setShowAutocomplete(shouldOpenAutocomplete)
  }

  const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    const currentResults = options[inputValue.label]?.options
    if (event.code === 'ArrowDown') {

      setCurrenIndex(prev => Math.min(prev + 1, currentResults.length - 1))
    } else if (event.code === 'ArrowUp') {
      setCurrenIndex(prev => Math.max(prev - 1, 0))
    } else if (event.code === 'Enter') {
      const newValue:dependencieI = options[inputValue.label].options[currentIndex]
      setInputValue(newValue)
    }
    // console.log(currentIndex)
  }

  const handleNewValue = (index:number) => {
    const newValue:dependencieI = options[inputValue.label].options[index]
    // console.log(newValue)
    setInputValue(newValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const optionResults = options[inputValue.label]?.options ?? []
  const loading = options[inputValue.label]?.loading ?? false

  // console.log(options)
  // console.log(options[inputValue])
  return (
    <>
      <div className={styles.titleRow}>
        <h3 className="title">Registrar Mantenimiento</h3>
      </div>
      <div className={styles.formContainer}>
        <form action="" onSubmit={handleSubmit}>
          <div className="styles formRow">
            <div className={styles.autocompletInput}>
            <input
              // className={`${options[inputValue] && styles.search}`}
              value={inputValue.label}
              onChange={handleInputChange}
              type="text"
              onFocus={() => setShowAutocomplete(true)}
              onBlur={() => setTimeout(() => setShowAutocomplete(false), 500)}
              onKeyDown={handleKeydown}
            />
            <ul>
            {showAutocomplete && loading === true
              ? <p>Loading..!</p>
              : showAutocomplete && optionResults.map(
                ({value, label}:{value:number, label:string}, index:number) => <li className={`${currentIndex === index && styles.seletcItemOption} ${styles.itemOption}`} key={value} onClick={() => handleNewValue(index)} >{label}</li>
                )
            }
            </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default index;