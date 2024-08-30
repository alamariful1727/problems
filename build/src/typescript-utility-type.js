"use strict";
//? Partial
const updateTodo = (todo, fieldsToUpdate) => {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
};
const todo1 = { title: "1", description: "1", status: false };
const todo2 = updateTodo(todo1, { status: true });
const cats = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British" },
};
