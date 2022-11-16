import "./style.css";

const List = ({ tasks, hiddenDoneTask }) => (
    <ul className="list">
        {tasks.map(({ id, content, done }) => (
            <li
                key={id}
                className={`list__item ${done && hiddenDoneTask ? "list__item--hidden" : ""}`}
            >
                <button className="list__button list__button--toggleDone">
                    {done ? "✔" : ""}
                </button>
                <span className={`${done ? "list__text--done" : ""}`}>
                    {content}
                </span>
                <button className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default List;