import Task from '../models/task.js'
/*
 ** _listado
    {'uuid-1212123-1231231-2: {id:12, desc:abc,completoEn:92231}}
 **
*/

class Tasks {

    _list = {};

    constructor(){
        this._list = {}
    }

    createTask(desc = ''){ //se iguala a string vacío para que sepa que es una string, no es necesario pero mejor indicar el tipo de dato
        const task = new Task(desc);
        this._list[task.id] = task;
    }
}


export default Tasks

