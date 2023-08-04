import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTaskByQuery, toogleTaskDone } from "../../tasksSlice";
import { List, Item, DoneButton, RemoveButton, Content } from "./styled"
import { useLocation, Link } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(({ id, content, done }) => (
                <Item
                    key={id}
                    hidden={done && hideDone}
                >
                    <DoneButton onClick={() => dispatch(toogleTaskDone(id))}>
                        {done ? "✔" : ""}
                    </DoneButton>
                    <Content done={done}>
                        <Link to={`/zadania/${id}`}>{content}</Link>
                    </Content>
                    <RemoveButton onClick={() => dispatch(removeTask(id))}>
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </List>
    );
}

export default TaskList;