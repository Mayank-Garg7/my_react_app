import { useWorkContext } from "../hooks/useWorkContext";
import type { Task } from '../context/TodoContext'
import ToDoList from "./ToDoList";

function ShowTask() {
  const { work } = useWorkContext()
  return (
    <div>
      {work.map((item: Task) => (
        <ToDoList item={item} key={item.id} />
      ))}
    </div>

  )
}

export default ShowTask