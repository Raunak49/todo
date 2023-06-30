import { useRef } from 'react';
import styles from './Input.module.css';
import { v4 as uuid } from 'uuid';

function Input(props) {
    const task = useRef();
    const SubmitHandler = (e) => {
        e.preventDefault();
        const newTask = {
            key: uuid(),
            task: task.current.value,
        }
        props.onAddTask(newTask);
        task.current.value = "";
    }

    return (
        <div className={styles.inputGroup}>
            <input type="email" className={styles.input} name="Email" placeholder="add task" ref={ task } />
            <input className={styles.buttonSubmit} value="Add" type="submit" onClick={SubmitHandler}/>
        </div>
    )
}

export default Input;
