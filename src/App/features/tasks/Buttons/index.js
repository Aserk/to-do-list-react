import { useDispatch, useSelector } from "react-redux";
import { selectTasks, setAllDone, toogleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled"

const Buttons = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length > 0) {
        return (
            <StyledButtons>
                <Button onClick={() => dispatch(toogleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </StyledButtons>
        )
    }
};

export default Buttons;