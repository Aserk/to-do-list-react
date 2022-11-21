import "./style.css"

const Buttons = ({ tasks, hiddenDone, toggleHiddenDone, setAllDone }) => {
    if (tasks.length > 0) {
        return (
            <div className="buttons">
                <button onClick={toggleHiddenDone} className="buttons__button">
                    {hiddenDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="buttons__button"
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </div>
        )
    }
};

export default Buttons;