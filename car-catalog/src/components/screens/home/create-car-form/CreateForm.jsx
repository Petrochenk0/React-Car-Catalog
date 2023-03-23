import styles from './CreateForm.module.css'
const CreateForm = () =>{
     return <form className={styles.form}>
        <input type="text" placeholder="name" />
    </form>
}

export default CreateForm