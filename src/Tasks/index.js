import { List, Item, DoneButton, RemoveButton, Content } from "./styled"

const Tasks = ({ tasks, hiddenDone, removeTask, toggleDoneTask }) => (
    <List>
        {tasks.map(({ id, content, done }) => (
            <Item
                key={id}
                hidden={done && hiddenDone}
            >
                <DoneButton onClick={() => toggleDoneTask(id)}>
                    {done ? "✔" : ""}
                </DoneButton>
                <Content done={done}>
                    {content}
                </Content>
                <RemoveButton onClick={() => removeTask(id)}>
                    🗑
                </RemoveButton>
            </Item>
        ))}
    </List>
);

export default Tasks;