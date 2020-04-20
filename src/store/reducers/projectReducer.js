const initState = {
    projects: [
        {id: '1', title: 'title one', content: 'blah blah blah'},
        {id: '2', title: 'title one', content: 'blah blah blah' },
        {id: '3', title: 'title one', content: 'blah blah blah' }
    ]
}

const authReducer = (state = initState, action) => {
    return state
}

export default authReducer