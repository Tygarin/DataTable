import { useEffect, useState } from "react"
import Error from "../components/Error"
import Loader from "../components/Loader"
import Table from "../components/Table"
import { useFetch } from "../hooks/useFetch"
import { Data } from "../types/dataType"

type Props = {}

function App({ }: Props) {
  const { request, loader, error } = useFetch()
  const [data, setData] = useState<Data[]>([])

  useEffect(() => {
    request({ url: 'https://62a3516b5bd3609cee67e694.mockapi.io/api/table' }).then(res => {
      res.map((e: Data, index: number) => res[index].date = e.date.substring(0, 10))
      setData(res)
    })
  }, [])

  return (
    <div>
      {loader && <Loader />}
      {error && <Error />}
      {!loader && data &&
        <Table
          data={data}
        />}
    </div>
  )
}

export default App