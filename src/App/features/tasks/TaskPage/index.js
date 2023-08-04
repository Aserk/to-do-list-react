import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import { getTaskbyId } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskbyId(state, id));

    return (
        <Container>
            <header>
                <h1>Szczegóły zadania</h1>
            </header>
            <Section
                title={task ? task.content : "Nie znaleziono zadania🥲"}
                body={!!task && (
                    <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</>
                )}
            />
        </Container>
    );
}

export default TaskPage;