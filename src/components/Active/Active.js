import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { done, trash } from '../../database/database';
import Todo from '../Todo/Todo';

const Active = () => {

    const [all, setAll] = useState([]);
    const [refresh,setRefresh] = useState(false);

    useEffect(() => {
        const list = localStorage.getItem('todo');
        list && setAll(JSON.parse(list));
    }, [refresh])

    const newAll=all.filter(todo =>todo.isActive===true);

    const setDone=(id)=>{
        done(all,id);
        setRefresh(!refresh);
    }

    const setTrash=(id)=>{
        trash(all,id);
        setRefresh(!refresh);
    }

    return (
        <Container>
            <Row>
                <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} xl={{ span: 6, offset: 3 }}>
                    {
                        newAll.map(todo =><Todo setTrash={setTrash} setDone={setDone} key={todo.id} todo={todo}></Todo> )
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Active;