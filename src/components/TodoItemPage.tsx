import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

interface TodoItemPageParams {
    id: string;
}

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams<TodoItemPageParams>();
    const history = useHistory();

    useEffect(() => {
        fetchTodos();
    }, [])


    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
            setTodo(response.data);

        } catch (e) {
            alert(e);
        }
    }
    return (
        <div>
            <button onClick={() => history.push('/todos')}>Back</button>
            <h1>{todo?.title} Task Page</h1>
        </div>
    );
};

export default TodoItemPage;