import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hiddenDone, setHiddenDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "zjeść obiad", done: true },
    { id: 2, content: "pójść na spacer", done: false },
  ]);

  const toogleHiddenDone = () => {
    setHiddenDone(hiddenDone => !hiddenDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

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
            hiddenDone={hiddenDone}
            removeTask={removeTask}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hiddenDone={hiddenDone}
            toogleHiddenDone={toogleHiddenDone}
          />
        }
      />
    </Container>
  );
}

export default App;