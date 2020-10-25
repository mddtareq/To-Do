import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Add.css'

const Add = () => {

    const [newTodo,setNewTodo] = useState('');
    const history = useHistory();
    const [todo,setTodo] = useState([]);

    useEffect(() =>{
        const list =localStorage.getItem('todo');
        list && setTodo(JSON.parse(list));
    },[todo])

    const submit=(event) => {
        if(newTodo.length>0){
            const createTodo={
            name:newTodo,
            isActive: true,
            id:new Date().getTime()+Math.floor(Math.random() * 1000)
        }
        const addTodo=[...todo,createTodo]
        setTodo(addTodo);
        localStorage.setItem('todo',JSON.stringify(addTodo));
        setNewTodo('');
        document.getElementById('task-text').value='';
        }
        else{
            alert("Please Enter Some Data");
        }
       
    }

    const change = (event) => {
        const newTask=event.target.value;
        setNewTodo(newTask);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={{span:10,offset:1}} md={{span:8,offset:2}} lg={{span:6,offset:3}} xl={{span:6,offset:3}}>
                <h3 className="text-center mt-4 mb-3 heading" >Add Your Task</h3>
                    <input id='task-text' onChange={change} className="from-control" type="text" required />
                    <input onClick={submit} className="submit-button" type="submit" value="Add"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Add;