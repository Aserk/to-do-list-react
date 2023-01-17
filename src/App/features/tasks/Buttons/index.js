import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, selectIsEveryTasksDone, selectIsTasksEmpty, setAllDone, toogleHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled"

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
    const dispatch = useDispatch();

    if (!isTasksEmpty) {
        return (
            <StyledButtons>
                <Button onClick={() => dispatch(toogleHideDone())}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    onClick={() => dispatch(setAllDone())}
                    disabled={isEveryTasksDone}
                >
                    Ukończ wszystkie
                </Button>
            </StyledButtons>
        )
    }
};

export default Buttons;