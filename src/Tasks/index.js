import { StyledList, StyledItem, StyledButton, StyledContent } from "./styled"

const Tasks = ({ tasks, hiddenDone, removeTask, toggleDoneTask }) => (
    <StyledList>
        {tasks.map(({ id, content, done }) => (
            <StyledItem
                key={id}
                hidden={done && hiddenDone}
            >
                <StyledButton
                    toggleDone
                    onClick={() => toggleDoneTask(id)}
                >
                    {done ? "✔" : ""}
                </StyledButton>
                <StyledContent done={done}>
                    {content}
                </StyledContent>
                <StyledButton
                    remove
                    onClick={() => removeTask(id)}
                >
                    🗑
                </StyledButton>
            </StyledItem>
        ))}
    </StyledList>
);

export default Tasks;