import { useCallback, useEffect, useState } from 'react';
import './TodosList.css'
import axios from 'axios';

function TodosList() {
    const [todosData, setTodosData] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetchTodosData = useCallback(async() => {
        try {
            setLoading(true)
            const { data } = axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodosData(data)
        } catch(error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchTodosData()
    }, []);

    const renderTodosData = () => {
        if (loading || !todosData?.length) {
            return (<h3>Carregando</h3>)
        }
    }

  return (
    <div>
        <h3>Lista de Todos:</h3>
        {todosData.map(todo => (
            <div>
                <p>ID: {todo.id}</p>
                <p>Title: {todo.title}</p>
                <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            </div>
      ))}
    </div>
  );
}

export default TodosList;