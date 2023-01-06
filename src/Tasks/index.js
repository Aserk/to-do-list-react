import { List, Item, Button, Content } from "./styled"

const Tasks = ({ tasks, hiddenDone, removeTask, toggleDoneTask }) => (
    <List>
        {tasks.map(({ id, content, done }) => (
            <Item
                key={id}
                hidden={done && hiddenDone}
            >
                <Button
                    toggleDone
                    onClick={() => toggleDoneTask(id)}
                >
                    {done ? "✔" : ""}
                </Button>
                <Content done={done}>
                    {content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;