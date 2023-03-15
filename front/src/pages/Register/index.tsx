import Autocomplete from '../../components/UI/Autocomplete'

// Import Styles Modules
import styles from './styles.module.css'

const index = () => {

  const handleSubmit = (e:React.SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.titleRow}>
        <h3 className="title">Registrar Mantenimiento</h3>
      </div>
      <div className={styles.formContainer}>
        <form action="" onSubmit={handleSubmit}>
          <Autocomplete placeholder='Fiscalia...' options={[]} />
          <button type='submit'>Registrar</button>
        </form>
      </div>
    </>
  );
}

export default index;