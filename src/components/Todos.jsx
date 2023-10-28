import { Link, useLocation } from "react-router-dom"
import { Button } from "./Button"
import styles from "./Todos.module.css"
import { memo } from "react"

const Todos = ({ todos, handleDelete, addTodo }) => {
  // console.log("render todos")

  // const location = useLocation()

  // console.log(location)
  return (
    <div>
      {/* <Button onClick={addTodo}>Add new todo</Button> */}

      {todos.map((todo) => (
        <Link key={todo.id} to={`/about/${todo.id}`}>
          <div className={styles.todo}>
            {todo.id}
            {"  "}
            {todo.title}

            <Button
              onClick={(event) => {
                event.preventDefault()
                handleDelete(todo.id)
              }}
            >
              delete
            </Button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default memo(Todos)
