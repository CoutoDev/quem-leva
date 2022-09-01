import { useEffect, useState } from 'react'
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
            const id = itemId
            
            useEffect(() => {
                setIsEditing(isEditingItem)
                setUpdatedWho(who)
                setUpdatedWhat(what)
            }, [])

            return {
                id,
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
            id: result.current.id,
            what: result.current.updatedWhat,
            who: result.current.updatedWho
        }} remove={(id) => console.log(id)} />)

        expect(screen.getByTestId(`item-id-${result.current.id}`)).toContainEqual(`<div data-testid={item-id-${result.current.id}}><span>Vitor</span><span>Cake</span><button>Editar</button><button>Excluir</button></div>`)
    })
})