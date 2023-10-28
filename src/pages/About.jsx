import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useSelector } from "react-redux"

const URL = (id) => `https://jsonplaceholder.typicode.com/todos/${id}`

export const PageAbout = () => {
  const params = useParams()
  // const location = useLocation()
  const navigate = useNavigate()
  const { value } = useSelector((state) => state.counter)

  const { data, error, isLoading } = useFetch(URL(params.id))

  return (
    <div>
      <h1>{data.id}</h1>
      <h5>{data.title}</h5>
      <h1>value is {value}</h1>
      <button onClick={() => navigate("/")}>navigate to home</button>
    </div>
  )
}
