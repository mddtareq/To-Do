import { faCheck, faCoffee, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Todo.css';


const Todo = ({ todo,setDone,setTrash,setUndo }) => {

    const { name, isActive,id } = todo;

    let done;
    if (isActive) {
        done = true;
    }
    else {
        done = false;
    }

    return (
        <>
            {
                todo ?
                    <div className="single-todo">
                        <div className="d-flex justify-content-between">
                            {
                                done ? 
                                <h5 style={{color: 'green'}}>{name}</h5> 
                                :
                                <h5 style={{textDecoration: 'line-through'}}>{name}</h5>
                            }
                            <div className="">
                                {
                                    done ?
                                    <button onClick={()=>setDone(id)} className="btn btn-sm btn-success mr-2">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    :
                                    <button onClick={()=>setUndo(id)} className="btn btn-sm btn-info mr-2">
                                        <FontAwesomeIcon icon={faUndo} />
                                    </button>
                                }
                                <button onClick={()=>setTrash(id)} className="btn btn-sm btn-danger">
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="">pai nai</div>
            }
        </>
    );
};

export default Todo;