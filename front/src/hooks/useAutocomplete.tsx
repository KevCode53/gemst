import { useEffect, useState } from "react"
import { search } from "../utilities/dependencies"
import { getActiveToken } from "../utilities/getActiveToken"
import { removeAccents } from "../utilities/removeAccents"

interface optionListItemI {
  results: [];
  loading?: boolean;
}

type key = string
interface optionListI {
  key: optionListItemI
}

export const useAutocomplete = (
) => {

  const [textValue, setTextValue] = useState<string>('')
  const [showOptions, setShowOptions] = useState(false)
  const [optionList, setOptionList] = useState<optionListItemI>({results:[]})
  const [optionResult, setOptionResult] = useState<optionListItemI>()

  const searchOptions = async (inputValue:string) => {
    setTextValue(inputValue)
    setOptionList((prev) => ({...prev, [inputValue]: {results: [], loading:true}}))
    const options = await search(removeAccents(inputValue))
    setOptionList((prev) => ({...prev, [inputValue]: {results: options, loading:false}}))
    // setShowOptions(true)
  }

  useEffect(()=>{
    const loading = optionList[textValue]?.loading
    const results = optionList[textValue]?.results ?? []
    setOptionResult({results: results, loading:loading})
    // if (textValue?.length <= 0) setOptionList([])
  },[optionList])


  return {
    searchOptions,
    optionList,
    optionResult,
    setOptionResult,
    setShowOptions,
    showOptions
  }
}