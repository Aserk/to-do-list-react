import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTaskByQuery, toogleTaskDone } from "../../tasksSlice";
import { List, Item, DoneButton, RemoveButton, Content, StyledLink } from "./styled"
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);

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
                        <StyledLink to={`/zadania/${id}`}>{content}</StyledLink>
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