import "./style.css"

const Buttons = ({ tasks, hiddenDone, toogleHiddenDone }) => {
    if (tasks.length > 0) {
        return (
            <div className="buttons">
                <button onClick={toogleHiddenDone} className="buttons__button">
                    {hiddenDone ? "Pokaż" : "Ukryj"} ukończone
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