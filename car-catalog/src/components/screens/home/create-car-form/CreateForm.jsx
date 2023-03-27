import styles from './CreateForm.module.css'
import { useState } from 'react'

const CreateForm = () =>{

    const [name, setName] = useState('')
    const createCar = e => {
        e.preventDefault()
        console.log(name)
    }

    
     return(
        <form className={styles.form}>
            <input 
            placeholder="name" 
            onChange={e => setName(e.target.value)}
            value={name}/>
            <input placeholder="price" />
            <input placeholder="img" />

            <button onClick={e=>createCar(e)}>Create</button>
        </form>
     ) 

}

export default CreateForm
