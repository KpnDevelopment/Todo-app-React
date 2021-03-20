    import React from 'react';
    
    const Form = () => {
        return(
            <form>
                <input type="text" className="todo-input"/>
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="slect">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Unompleted</option>
                    </select>
                </div>
            </form>
        );
    };
    export default Form;