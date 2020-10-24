import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Todo from '../Todo/Todo';
import{done, trash, undo} from '../../database/database'

const All = () => {

    const [all,setAll]=useState([]);
    const [refresh,setRefresh] = useState(false);

    useEffect(() =>{
        const list =localStorage.getItem('todo');
        list && setAll(JSON.parse(list));
    },[refresh])

    const setDone=(id)=>{
        done(all,id);
        setRefresh(!refresh);
    }

    const setTrash=(id)=>{
        trash(all,id);
        setRefresh(!refresh);
    }

    const setUndo=(id)=>{
        undo(all,id);
        setRefresh(!refresh);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                    {
                        all.map(todo =><Todo setUndo={setUndo} setTrash={setTrash} setDone={setDone} key={todo.id} todo={todo}></Todo>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default All;