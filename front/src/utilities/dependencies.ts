export interface dependencieI {
  value: number | undefined,
  label: string | undefined
}

export const dependencies = [
  {value: 1, label:'Concepciion las Minas'},
  {value: 2, label:'Olopa'},
  {value: 3, label:'San Juan Ermita'},
  {value: 4, label:'Camotán'},
  {value: 5, label:'San Jacinto'},
  {value: 6, label:'San José la Arada'},
  {value: 7, label:'Agencia Fiscal en el Municipio de Ipala'},
  {value: 8, label:'Agencia Fiscal en el Municipio de Quezaltepeque'},
  {value: 9, label:'Distrito Chiquimula'},
  {value: 10, label:'Narco-Actividad Oriente'},
  {value: 11, label:'Liquidadora Chiquimula'},
  {value: 12, label:'Fiscalia de la Mujer Chiquimula'},
  {value: 13, label:'Organismo Judicial Chiquimula'},
  {value: 14, label:'Esquipulas'},
  {value: 15, label:'Jocotán'},
]

const wait = (ms:number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const search = async (word:string) => {
  await wait(getRandom(0, 500))

  return dependencies.filter(d => {
    const option = d.label.toLowerCase()
    const wordLower = word.toLowerCase()
    return option.includes(wordLower)
  })
}