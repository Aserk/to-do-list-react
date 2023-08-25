import { useDispatch, useSelector } from "react-redux";
import { selectHideDone, selectIsEveryTasksDone, selectIsTasksEmpty, setAllDone, toogleHideDone } from "../../tasksSlice";
import { Button } from "../Button";
import { StyledButtons } from "./styled"

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            {!isTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toogleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTasksDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;