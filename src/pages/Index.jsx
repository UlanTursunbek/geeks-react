import { useCallback, useEffect, useState, useMemo } from "react"
import styles from "./Index.module.css"
import { useFetch } from "../hooks/useFetch"
import Todos from "../components/Todos"

const URL = (page) => `https://jsonplaceholder.typicode.com/todos?_page=${page}`

// const expensiveCalculation = (num) => {
//   console.log("Calculating...")
//   for (let i = 0; i < 1000000000; i++) {
//     num += 1
//   }
//   return num
// }

export const PageIndex = () => {
  const [counter, setCounter] = useState(0)

  const { data, error, isLoading } = useFetch(URL(counter))

  const [list, setList] = useState(data)

  // const calculation = useMemo(() => expensiveCalculation(counter), [counter])

  useEffect(() => {
    if (!isLoading) {
      setList(data)
    }
  }, [isLoading, counter, URL])

  const handleDelete = useCallback(
    (id) => {
      const filtered = list.filter((item) => item.id !== id)
      setList(filtered)
    },
    [list],
  )

  const addTodo = useCallback(() => {
    setList((prev) => [
      {
        id: Date.now(),
        title: `Todo created at ${Date.now()}`,
      },
      ...prev,
    ])
  }, [list])

  const increment = () => {
    setCounter((prev) => prev + 1)
  }
  const decrement = () => {
    setCounter((prev) => prev - 1)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    alert(error.message)
  }

  return (
    <div className={styles.main}>
      <h1>{counter}</h1>
      <button onClick={decrement}>one page back</button>
      <button onClick={increment}>one page forward</button>

      {/* {calculation} */}

      <Todos todos={list} handleDelete={handleDelete} addTodo={addTodo} />
    </div>
  )
}
