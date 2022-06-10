import React from 'react'
import { Heading } from './Table'

type Props = { text: string, selectData: Heading[], onSelect: Function }

function Select({ text, selectData, onSelect }: Props) {
    return (
        <div>
            <p><strong>{text}</strong></p>
            <p>
                <select onChange={(e) => onSelect(e.target.value)}>
                    {selectData.map((el: Heading) =>
                        <option
                            key={el.name}
                            value={el.name}
                        >
                            {el.text}
                        </option>
                    )}
                </select>
            </p>
        </div>
    )
}

export default Select