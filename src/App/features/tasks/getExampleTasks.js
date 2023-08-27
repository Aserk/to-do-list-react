const exampleTasks = "/todo-list-react/exampleTasks.json";

export const getExampleTasks = async () => {
    const response = await fetch(exampleTasks);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};