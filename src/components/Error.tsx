import React from 'react'

type Props = {}

function Error({ }: Props) {
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
            <div>
                <p>Ошибка Загрузки</p>
            </div>
        </div>

    )
}

export default Error