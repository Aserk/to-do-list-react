import "./style.css"

const Buttons = ({ tasks, hiddenDoneTask }) => {
    if (tasks.length > 0) {
        return (
            <div className="buttons">
                <button className="buttons__button">
                    {hiddenDoneTask ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </div>
        )
    }
};

export default Buttons;