import styles from './Loader.module.css'

const Loader = () => (
  <div className={styles['lds-ripple']}>
    <div />
    <div />
  </div>
)

export default Loader
