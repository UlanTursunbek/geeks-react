import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, setName } from "../store/features/counterSlice"

export const ReduxPage = () => {
  const count = useSelector((state) => state.counter.value)
  const name = useSelector((state) => state.counter.name)

  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <input value={name} onChange={(e) => dispatch(setName(e.target.value))} />

        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}
