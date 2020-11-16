const initState = {
    test: [
        { username: "ahamd", password: "123"}
    ],
    showMenu: "hide",
<<<<<<< HEAD
    showsetting:"hide"

=======
    showSearch: "hide",
    showSettings:"hide",
    showSign: "hide",
    Games: [],
    GameIndex: -1
>>>>>>> 8b98a552636a1a1031ed9df2d7a0dfe721ce60da
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === "SHOW_MENU") {
        return {
            ...state,
            showMenu: action.showMenu
        }
    }
<<<<<<< HEAD
    else if (action.type === "SHOW_setting") {
        return {
            ...state,
            showsetting: action.showsetting
=======
    if (action.type === "SHOW_SEARCH") {
        return {
            ...state,
            showSearch: action.showSearch
        }
    }
    if (action.type === "SHOW_SIGN") {
        return {
            ...state,
            showSign: action.showSign
        }
    }
    if (action.type === "SHOW_SETTINGS") {
        return {
            ...state,
            showSettings: action.showSettings
        }
    }
    if (action.type === "SHOW_GAMES") {
        return  {
            ...state,
            Games: action.Games
        }
    }
    if (action.type === "SAVE_GAME_INDEX") {
        return  {
            ...state,
            GameIndex: action.GameIndex
>>>>>>> 8b98a552636a1a1031ed9df2d7a0dfe721ce60da
        }
    }
    return state;
}

export default rootReducer;
