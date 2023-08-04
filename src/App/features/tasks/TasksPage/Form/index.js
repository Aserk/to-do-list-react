import { nanoid } from "@reduxjs/toolkit";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { StyledForm, Button } from "./styled";
import Input from "../../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() !== "") {
            dispatch(addTask({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            }));
        };
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={inputRef}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;