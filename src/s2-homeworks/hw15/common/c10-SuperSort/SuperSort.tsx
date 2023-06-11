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
    return sort === down ? up : sort == up ? '' : down
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
            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.iconBord}
                alt={'icon'}
            />
        </span>
    )
}

export default SuperSort


/*
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
    return sort === '' ? down : sort === down ? up : sort === up ? '' : down
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
        <span id={id + '-sort-' + value} onClick={onChangeCallback} className={s.iconContainer}>
            <img
                id={id + '-icon-' + sort}
                className={s.iconBord}
                src={icon}
                alt={'icon'}
            />
        </span>
    )
}

export default SuperSort
 */