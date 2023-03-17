import { optionsI } from "./interfaces"
import { removeAccents } from "./removeAccents.utilities"

const wait = (ms:number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const search = async (word:string, options:optionsI[]) => {
  await wait(getRandom(0, 500))

  return options.filter(d => {
    const option = d.label.toLowerCase()
    const normalizeOption = removeAccents(option)
    const normalizeWord = removeAccents(word.toLowerCase())
    return normalizeOption.includes(normalizeWord)
  })
}