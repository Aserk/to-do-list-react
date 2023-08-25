import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Search from "./Search";
import Section from "../../../common/Section";
import { Container } from "../../../common/Container/styled";
import FetchExampleTasksButton from "./fetchExampleTasksButton";

const TasksPage = () => {

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;