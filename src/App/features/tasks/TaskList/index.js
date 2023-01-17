import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectTasks, toogleTaskDone } from "../tasksSlice";
import { List, Item, DoneButton, RemoveButton, Content } from "./styled"

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                        {content}
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