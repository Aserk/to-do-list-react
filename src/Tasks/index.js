import "./style.css";

const Tasks = ({ tasks, hiddenDone, removeTask }) => (
    <ul className="list">
        {tasks.map(({ id, content, done }) => (
            <li
                key={id}
                className={`list__item ${done && hiddenDone ? "list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--toggleDone">
                    {done ? "✔" : ""}
                </button>
                <span className={`${done ? "list__text--done" : ""}`}>
                    {content}
                </span>
                <button
                    className="list__button list__button--remove"
                    onClick={() => removeTask(id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;