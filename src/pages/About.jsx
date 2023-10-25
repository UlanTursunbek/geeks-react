import { useParams, useLocation, useNavigate } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const URL = (id) => `https://jsonplaceholder.typicode.com/todos/${id}`

export const PageAbout = () => {
  const params = useParams()
  // const location = useLocation()
  const navigate = useNavigate()

  const { data, error, isLoading } = useFetch(URL(params.id))
  console.log(navigate)
  return (
    <div>
      <h1>{data.id}</h1>
      <h5>{data.title}</h5>
      <button onClick={() => navigate("/")}>navigate to home</button>
    </div>
  )
}
