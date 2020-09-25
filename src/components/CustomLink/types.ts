
export type PropsType = {
    link: string,
    title?: string,
    component?: React.FC,
    className?: string,
    action?: (event: React.MouseEvent<HTMLElement>) => void,
}
