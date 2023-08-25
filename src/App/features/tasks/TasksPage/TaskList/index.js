import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectHideDone, selectTaskByQuery, toogleTaskDone } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { List, Item, DoneButton, RemoveButton, Content, StyledLink } from "./styled"
import { toTask } from "../../../../routes";

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
                        <StyledLink to={toTask({ id: id })}>{content}</StyledLink>
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