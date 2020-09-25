export interface PropsType {
    items: ItemData[],
    action?: (event: React.MouseEvent<HTMLElement>) => void,
    adaptiveOn?: boolean
}

interface ItemData {
    key: string,
    value: string
}