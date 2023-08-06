import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsTasksLoading } from "../../tasksSlice";
import { Button } from "../../Button";

export default () => {
    const loading = useSelector(selectIsTasksLoading);
    const dispatch = useDispatch();

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Loading..." : "Pobierz przykładowe zadania"}
        </Button>
    )
};