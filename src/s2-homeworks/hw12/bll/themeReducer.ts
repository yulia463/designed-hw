const initState = {
    themeId: 1,
}

export type changeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}

export type ThemeReducerType = {themeId: number}

type ActionType = changeThemeIdType

export const themeReducer = (state = initState, action: ActionType): ThemeReducerType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any