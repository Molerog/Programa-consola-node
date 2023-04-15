import Task from "../models/task.js";

/*
 ** _listado
    {'uuid-1212123-1231231-2: {id:12, desc:abc,completoEn:92231}}
 **
*/

class Tasks {
  _list = {};

  get arrayList() {
    const arrList = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      arrList.push(task);
    });
    return arrList;
  }


  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    //se iguala a string vacío para que sepa que es una string, no es necesario pero mejor indicar el tipo de dato

    const task = new Task(desc);
    this._list[task.id] = task;
  }
  
  loadArrayFromDB(data = []) {
  data.forEach((object) => {
    this._list[object.id] = object;
  });
}
  completedList(){
    console.log();
      this.arrayList.forEach((task,i)=>{
      let idx = `${i + 1}`.green;
      const completed = task.completed ? 'Completado'.green : 'Pendiente'.red
      console.log(`${idx}.${task.desc} :: ${completed}`)    
      i++
    })
  }
}

export default Tasks;
