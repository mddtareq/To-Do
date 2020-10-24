const done=(all,id)=>{
    const addDone=all.map(todo =>{
        if(todo.id===id){
            todo.isActive=!todo.isActive;
        }
        return todo;
    }); 
    localStorage.setItem('todo', JSON.stringify(addDone));
}

const trash=(all,id)=>{
    const remaining=all.filter(todo =>todo.id!==id);
    localStorage.setItem('todo', JSON.stringify(remaining));
}

const undo=(all,id)=>{
    const addDone=all.map(todo =>{
        if(todo.id===id){
            todo.isActive=!todo.isActive;
        }
        return todo;
    }); 
    localStorage.setItem('todo', JSON.stringify(addDone));
}

export {done,trash,undo};

