import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (URL) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      try {
        const response = await axios.get(URL)

        setData(response.data)

        setIsLoading(false)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [URL])

  return { data, isLoading, error }
}
