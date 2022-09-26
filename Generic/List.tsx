import React from 'react'

type listProps<T> = { // parameterized type
    items: any[]
    onClick: (val: T) => void
}

export const List = <T extends {id:number}>({ items, onClick }: listProps<T>) => {
    return (
        <>
            <h2>list of items is below</h2>
            {
                items.map((item) => {
                    <h3 key={item.id} onClick={() => console.log(item)}>
                        {item}
                    </h3>
                })
            }
        </>
    )
}
