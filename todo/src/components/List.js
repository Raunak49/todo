import ListItem from "./ListItem";
import styles from './List.module.css';

const List = (props) => {
    const { list } = props;
    const deleteHandler = (task) => {
        props.deleteItem(task);
    };

    const editHandler = (task , inputValue) => {
        props.editItem(task, inputValue);
    };
    return (
        <div className={styles.container}>
            {list.length === 0 && <p className={styles.empty}>Please enter a task</p>}
            {list.length > 0 &&
                list.map((task) => {
                    return <ListItem task={task} deleteTask={deleteHandler} editTask={ editHandler } />;
                })
            }
        </div>
    );
}

export default List;