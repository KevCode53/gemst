import { useState, useEffect } from "react"
import { optionsI } from "../components/UI/Autocomplete/interfaces"
import { getActiveToken } from "../components/UI/Autocomplete/getActiveToken.utilities"
import { search } from "../components/UI/Autocomplete/search.utilities"

interface objectsResultI {
  results: optionsI[],
  loading: boolean
}

interface optionResultsI {
  [key:string] : objectsResultI
}

export const useAutocomplete = (options:optionsI[]) => {
  const [inputText, setInputText] = useState<optionsI>({value:-1, label: ''})
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [showAutocomplete, setShowAutocomplete] = useState(false)
  const [loading, setLoading] = useState(false)
  const [optionResults, setOptionResult] = useState<optionResultsI>({})
  const [isFocusMouseOption, setIsFocusMouseOption] = useState(false)

  const handleInputChange:
  React.ChangeEventHandler<HTMLInputElement> = async(event) => {
    const {value, selectionEnd=0} = event.target

    setInputText({value:-1, label:value})
    if(!value || optionResults[value])  return

    const {word} = getActiveToken(value, selectionEnd)

    setShowAutocomplete(/\w{3,15}$/.test(word))

    setOptionResult((prev) => (
        {...prev, [word]: {results: [], loading:true}}
      )
    )
    const results = await search(word, options)
    console.log(results)
    setOptionResult((prev) => (
        {...prev, [word]: {results: results, loading:true}}
      )
    )
  }

  // console.log(optionResults)

  return {handleInputChange, inputText, showAutocomplete, setShowAutocomplete, optionResults}
}

