import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zjeść obiad", done: true },
  { id: 2, content: "pójść na spacer", done: false },
];

const hiddenDoneTask = false;

function App() {
  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hiddenDoneTask={hiddenDoneTask}
            extraHeaderContent={<Buttons tasks={tasks} hiddenDoneTask={hiddenDoneTask} />}
          />
        }
      />
    </Container>
  );
}

export default App;