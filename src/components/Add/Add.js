import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Todo from '../Todo/Todo';
import './Add.css'

const Add = () => {

    const [newTodo, setNewTodo] = useState('');
    const [todo, setTodo] = useState([]);
    const [filter, setFilter] = useState([]);
    const [category, setCategory] = useState('all');


    useEffect(() => {
        const list = localStorage.getItem('todo');
        list && setTodo(JSON.parse(list));
    }, [])

    const submit = (event) => {
        if (newTodo.length > 0) {
            const createTodo = {
                name: newTodo,
                isActive: true,
                id: new Date().getTime() + Math.floor(Math.random() * 1000)
            }
            const addTodo = [...todo, createTodo]
            setTodo(addTodo);
            localStorage.setItem('todo', JSON.stringify(addTodo));
            setNewTodo('');
            document.getElementById('task-text').value = '';
        }
        else {
            alert("Please Enter Some Data");
        }
    }

    const change = (event) => {
        const newTask = event.target.value;
        setNewTodo(newTask);
    }


    useEffect(() => {
        if (category === 'all') {
            return setFilter([...todo])
        }
        if (category === 'done') {
            const currentTodo = todo.filter(item => item.isActive !== true)
            return setFilter([...currentTodo])
        }
        if (category === 'active') {
            const currentTodo = todo.filter(item => item.isActive === true)
            return setFilter([...currentTodo])
        }
    }, [todo, category])

    const setDone = (id) => {
        const done = todo.map(todo => {
            if (todo.id === id) {
              todo.isActive = !todo.isActive;
            }
            return todo;
          });
          localStorage.setItem('todo', JSON.stringify(done));
          setTodo(done)
    }

    const setTrash = (id) => {
        const trash = todo.filter(todo => todo.id !== id)
        localStorage.setItem('todo', JSON.stringify(trash))
        setTodo(trash)
    }

    const setUndo = (id) => {
        const undo=todo.filter(todo =>{
            if(todo.id===id){
                todo.isActive=!todo.isActive;
            }
            return todo;
        }); 
        localStorage.setItem('todo', JSON.stringify(undo));
        setTodo(undo)
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                    <h3 className="text-center mt-4 mb-3 heading" >Add Your Task</h3>
                    <input id='task-text' onChange={change} className="from-control pl-4" type="text" required />
                    <input onClick={submit} className="submit-button" type="submit" value="Add" />
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                    <div className="custom-nav text-center mt-3">
                        <button onClick={() => setCategory('all')} className={`mr-3 ${category === 'all' ? 'custom-background' : ''}`}>All</button>
                        <button onClick={() => setCategory('active')} className={`mr-3 ${category === 'active' ? 'custom-background' : ''}`} to="/active">Active</button>
                        <button onClick={() => setCategory('done')} className={`mr-3 ${category === 'done' ? 'custom-background' : ''}`} to="/done">Done</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                    {
                        filter.map(todo => <Todo setUndo={setUndo} setTrash={setTrash} setDone={setDone} key={todo.id} todo={todo}></Todo>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Add;