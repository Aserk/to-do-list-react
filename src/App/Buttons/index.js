import { StyledButtons, Button } from "./styled"

const Buttons = ({ tasks, hiddenDone, toggleHiddenDone, setAllDone }) => {
    if (tasks.length > 0) {
        return (
            <StyledButtons>
                <Button onClick={toggleHiddenDone}>
                    {hiddenDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </StyledButtons>
        )
    }
};

export default Buttons;