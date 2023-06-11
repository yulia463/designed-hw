import React from 'react'
import upicon from './up.png'
import downicon from './down.png'
import upAndDown from './upanddown.png'
import s from '../../HW15.module.css'

// добавить в проект иконки и импортировать
const downIcon = downicon
const upIcon = upicon
const noneIcon = upAndDown

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    switch (sort) {
        case '' :
            return down
        case up :
            return ''
        case down :
            return up
        default:
            return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img id={id + '-icon-' + sort} src={icon} alt={'icon'}/>
        </span>
    )
}

export default SuperSort