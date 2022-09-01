import { Items } from "../typings/items"
import { v4 as uuid } from 'uuid';

export const items: Items = [
    {
        id: uuid(),
        who: 'Vitor',
        what: 'Bread'
    },
    {
        id: uuid(),
        who: 'Joyce',
        what: 'Juice'
    },
    {
        id: uuid(),
        who: 'Ed',
        what: 'Pie'
    }
]