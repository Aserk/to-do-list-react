import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectHideDone, selectIsEveryTasksDone, selectIsTasksEmpty, setAllDone, toogleHideDone } from "../../tasksSlice";
import { StyledButtons, Button } from "./styled"

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);

    const dispatch = useDispatch();

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
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