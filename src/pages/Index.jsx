import { useCallback, useEffect, useState, useMemo } from "react"
import styles from "./Index.module.css"
import { useFetch } from "../hooks/useFetch"
import Todos from "../components/Todos"
import ClassButton from "../components/ClassButton"
import { Button } from "../components/Button"
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../store/features/counterSlice"

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
  }, [isLoading])

  // const handleDelete = useCallback(
  //   (id) => {
  //     const filtered = list.filter((item) => item.id !== id)
  //     setList(filtered)
  //   },
  //   [list],
  // )

  // const addTodo = useCallback(() => {
  //   setList((prev) => [
  //     {
  //       id: Date.now(),
  //       title: `Todo created at ${Date.now()}`,
  //     },
  //     ...prev,
  //   ])
  // }, [list])
  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (error) {
  //   alert(error.message)
  // }

  const increment = () => {
    setCounter((prev) => prev + 1)
  }

  const decrement = () => {
    setCounter((prev) => prev - 1)
  }
  //data.limit
  const LIMIT = 10
  const arrayButtons = Array.from(Array(LIMIT).keys())

  return (
    <div className={styles.main}>
      <div className={styles.buttons}>
        <ClassButton onClick={() => decrement()}>one page back</ClassButton>
        <Button onClick={() => increment()}>one page forward</Button>
      </div>

      {arrayButtons.map((item) => (
        <Button key={item} onClick={() => setCounter(item)}>
          {item}
        </Button>
      ))}
      {/* <button onClick={decrement}>one page back</button> */}
      {/* {calculation} */}

      <Todos todos={list} />
    </div>
  )
}
