export interface dependencieI {
  value: string | undefined,
  label: string | undefined
}

export const dependencies = [
  {value: 'Concepciion las Minas', label:'Concepciion las Minas'},
  {value: 'Olopa', label:'Olopa'},
  {value: 'San Juan Ermita', label:'San Juan Ermita'},
  {value: 'Camotán', label:'Camotán'},
  {value: 'San Jacinto', label:'San Jacinto'},
  {value: 'San José la Arada', label:'San José la Arada'},
  {value: 'Agencia Fiscal en el Municipio de Ipala', label:'Agencia Fiscal en el Municipio de Ipala'},
  {value: 'Agencia Fiscal en el Municipio de Quezaltepeque', label:'Agencia Fiscal en el Municipio de Quezaltepeque'},
  {value: 'Distrito Chiquimula', label:'Distrito Chiquimula'},
  {value: 'Narco-Actividad Oriente', label:'Narco-Actividad Oriente'},
  {value: 'Liquidadora Chiquimula', label:'Liquidadora Chiquimula'},
  {value: 'Fiscalia de la Mujer Chiquimula', label:'Fiscalia de la Mujer Chiquimula'},
  {value: 'Organismo Judicial Chiquimula', label:'Organismo Judicial Chiquimula'},
  {value: 'Esquipulas', label:'Esquipulas'},
  {value: 'Jocotán', label:'Jocotán'},
]

const wait = (ms:number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms)
  })

const getRandom = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}

export const search = async (word:string) => {
  await wait(getRandom(0, 5000))

  return dependencies.filter(d => {
    const option = d.label.toLowerCase()
    const wordLower = word.toLowerCase()
    return option.includes(wordLower)
  })
}