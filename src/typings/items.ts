export type Items = ItemType[]

export interface ItemType {
    id: string | number
    who: string | undefined
    what: string | undefined
}