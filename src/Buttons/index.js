import { StyledButtonContainer, StyledButtons } from "./styled"

const Buttons = ({ tasks, hiddenDone, toggleHiddenDone, setAllDone }) => {
    if (tasks.length > 0) {
        return (
            <StyledButtonContainer>
                <StyledButtons onClick={toggleHiddenDone}>
                    {hiddenDone ? "Pokaż" : "Ukryj"} ukończone
                </StyledButtons>
                <StyledButtons
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </StyledButtons>
            </StyledButtonContainer>
        )
    }
};

export default Buttons;