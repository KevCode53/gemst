import { useRef } from 'react'
import Autocomplete from '../../components/UI/Autocomplete'
import { dependencies } from '../../utilities/dependencies'

// Import Styles Modules
import styles from './styles.module.css'

const index = () => {
  const formRef = useRef()

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)

    console.log(formData.values())
  }

  return (
    <>
      <div className={styles.titleRow}>
        <h3 className="title">Registrar Mantenimiento</h3>
      </div>
      <div className={styles.formContainer}>
        <form action="" ref={formRef} onSubmit={handleSubmit}>
          <Autocomplete placeholder='Fiscalia...' options={dependencies} />
          <button type='submit'>Registrar</button>
        </form>
      </div>
    </>
  );
}

export default index;