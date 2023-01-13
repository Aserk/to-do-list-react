import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import { Container } from "../../common/Container/styled";
import { useState } from "react";
import { useTasks } from "../../useTasks"

function Tasks() {
  const [hiddenDone, setHiddenDone] = useState(false);

  const toggleHiddenDone = () => {
    setHiddenDone(hiddenDone => !hiddenDone);
  };

  const {
    tasks,
    removeTask,
    toggleDoneTask,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <header>
        <h1>Lista zadań</h1>
      </header>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hiddenDone={hiddenDone}
            removeTask={removeTask}
            toggleDoneTask={toggleDoneTask}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hiddenDone={hiddenDone}
            toggleHiddenDone={toggleHiddenDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;