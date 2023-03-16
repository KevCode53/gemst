import { useEffect, useState } from "react"
import { search } from "../utilities/dependencies"
import { getActiveToken } from "../utilities/getActiveToken"
import { removeAccents } from "../utilities/removeAccents"

interface optionListItemI {
  results: [];
  loading?: boolean;
}
type inputText = {
  value?: number;
  label: string;
}
type key = string
interface optionListI {
  key: optionListItemI
}

export const useAutocomplete = (
) => {

  const [textValue, setTextValue] = useState<inputText>({label:''})
  const [showOptions, setShowOptions] = useState(false)
  const [optionList, setOptionList] = useState<optionListItemI>({results:[]})
  const [optionResult, setOptionResult] = useState<optionListItemI>()
  const [valueSelect, setValuSelect] = useState({})
  const [currentIndex, setCurrentIndex] = useState(-1)

  const searchOptions = async (inputValue:string) => {
    setTextValue({label:inputValue})
    setOptionList((prev) => ({...prev, [inputValue]: {results: [], loading:true}}))
    const options = await search(removeAccents(inputValue))
    setOptionList((prev) => ({...prev, [inputValue]: {results: options, loading:false}}))
    // setShowOptions(true)
  }

  useEffect(()=>{
    const loading = optionList[textValue.label]?.loading
    const results = optionList[textValue.label]?.results ?? []
    setOptionResult({results: results, loading:loading})
    // if (textValue?.length <= 0) setOptionList([])
  },[optionList])

  const handleSelect = ({value, label}:{value:number, label:string}) => {
    setTextValue({value, label})
  }

  const handleKeysSelect = (code:string) => {
    if (code === 'ArrowDown') {
      setCurrentIndex(prev => {
        if (prev > (optionResult?.results.length - 2)) {
          return prev = 0
        } else {
          return Math.min(prev + 1)
        }
      })
    } else if (code === 'ArrowUp') {
      setCurrentIndex(prev => {
        if (prev <= 0 ) {
          return prev = (optionResult?.results.length - 1)
        } else {
          return Math.min(prev - 1)
        }
      })
    } else if (code === 'Enter') {
      const newValue = optionList[textValue.label].results[currentIndex]
      setTextValue(newValue)
      console.log(newValue)
    }
  }


  return {
    searchOptions,
    handleSelect,
    optionList,
    optionResult,
    setOptionResult,
    setOptionList,
    setShowOptions,
    handleKeysSelect,
    currentIndex,
    textValue,
    setTextValue,
    showOptions
  }
}