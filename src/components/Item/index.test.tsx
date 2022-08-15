import React, { useEffect, useState } from 'react'
import { render, screen, renderHook } from '@testing-library/react'
import { Item } from './index'


describe('Item Component', () => {
    test('Item existe', () => {
        const {result} = renderHook(({
            itemId,
            what,
            who,
            isEditingItem
        }) => {
            const [isEditing, setIsEditing] = useState(isEditingItem) 
            const [updatedWho, setUpdatedWho] = useState(who) 
            const [updatedWhat, setUpdatedWhat] = useState(what)
            
            useEffect(() => {
                setIsEditing(isEditingItem)
                setUpdatedWho(who)
                setUpdatedWhat(what)
            }, [])

            return {
                itemId,
                isEditing,
                updatedWho,
                updatedWhat
            }
        }, {
            initialProps: {
                itemId: 1,
                isEditingItem: false,
                who: 'Vitor',
                what: 'Cake'
            }
        })
        render(<Item item={{
            id: result.current.itemId,
            what: result.current.updatedWhat,
            who: result.current.updatedWho
        }} remove={(id) => console.log(id)} />)

        expect(screen.getByRole('listitem')).toContainHTML(`<li><div><span>Vitor</span><span>Cake</span><button>Editar</button><button>Excluir</button></div></li>`)
    })
})