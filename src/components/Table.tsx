import React, { useState } from 'react'
import useTable from '../hooks/useTable'
import { Data } from '../types/dataType'
import Sort from './Sort'
import TableFooter from './TableFooter'

type Props = {
    data: Data[]
}
export type Heading = { text: string, name: string }
const headingTable: Heading[] = [
    { text: 'Дата', name: 'date' },
    { text: 'Название', name: 'name' },
    { text: 'Количество', name: 'quantity' },
    { text: 'Расстояние', name: 'distance' },
]

const currentHeading = headingTable.filter(e => e.name !== 'date')

function Table({ data }: Props) {
    const [sortedData, setSortedData] = useState(data)

    const [page, setPage] = useState(1);
    const { slice, range } = useTable(sortedData, page, 10);
    return (
        <>
            <Sort
                data={data}
                setSortedData={setSortedData}
                headingTable={currentHeading}
            />
            <table className='table'>
                <thead className='tableRowHeader'>
                    <tr>
                        {headingTable.map((e: Heading) => <th className='tableHeader' key={e.name}>{e.text}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el: Data) => (
                        <tr className='tableRowItems' key={el.id}>
                            <td className='tableCell'>{el.date}</td>
                            <td className='tableCell'>{el.name}</td>
                            <td className='tableCell'>{el.quantity}</td>
                            <td className='tableCell'>{el.distance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    )
}

export default Table