// Import Styles Modules
import styles from './styles.module.css'

const index = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className={styles.titleRow}>
        <h3 className="title">Registrar Mantenimiento</h3>
      </div>
      <div className={styles.formContainer}>
        <form action="" onSubmit={handleSubmit}>
        </form>
      </div>
    </>
  );
}

export default index;