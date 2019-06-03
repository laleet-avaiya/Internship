import React from 'react';


function TodoList() {

    const data = [{ id: 1, date: "May 20 2019", todo: { JAVA: "OOP", DS: "Array" } },
    { id: 2, date: "May 21 2019", todo: { JAVA: "TypeCaste", DS: "LinkedList" } },
    { id: 3, date: "May 22 2019", todo: { JAVA: "Buffer Reader", DS: "Disjoint Set" } },
    { id: 4, date: "May 23 2019", todo: { JAVA: "SOLID", DS: "Heap" } }]

    return (
        <div className="top">
            Hello
        </div>
    );
}




export default TodoList;
