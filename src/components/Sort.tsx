import { useState } from 'react'
import { Data } from '../types/dataType'
import Select from './Select'
import { Heading } from './Table'

type Props = {
    data: Data[],
    setSortedData: Function,
    headingTable: Heading[]
}

const conditionData = [
    { text: 'Равно', name: 'equal' },
    { text: 'Содержит', name: 'contains' },
    { text: 'Больше', name: 'greater' },
    { text: 'Меньше', name: 'less' },
]

function Sort({ data, setSortedData, headingTable }: Props) {
    const [col, setCol] = useState<string>(headingTable[0].name)
    const [condition, setCondition] = useState<string>(conditionData[0].name)
    const [value, setValue] = useState<string | number>('')

    const sortData = () => {
        let sortedData = data.filter((elem: any) =>
            (condition === 'equal' && elem[col] == value) ||
            (condition === 'greater' && elem[col] >= value) ||
            (condition === 'less' && elem[col] <= value) ||
            (condition === 'contains' && elem[col].toString().includes(value))
        )
        console.log(sortedData);
        
        setSortedData(sortedData)
    }

    return (
        <div className='flex relative justify-around my-5 py-2 border'>
            <Select
                text='Выберите колонку'
                selectData={headingTable}
                onSelect={setCol}
            />
            <Select
                text='Выберите условие'
                selectData={conditionData}
                onSelect={setCondition}
            />
            <input type="text" onChange={e => setValue(e.target.value)} placeholder="Введите значение" />
            <button onClick={sortData}>Сортировать</button>
        </div>
    )
}

export default Sort