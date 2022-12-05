const List = ({tasks, handleClick}) => {

    return (
        <div>
            <ul>
                {tasks.map((task) => {
                    return <li key={task.id}>{task.title}</li>
                })}
            </ul>
            <button onClick={handleClick}>완료</button>
        </div>
    );
}

export default List;
