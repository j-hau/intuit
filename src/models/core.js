export const core = {
    state: {
        counter: 0
    },

    reducers: {
        addToCounter(state, value) {
            return { 
                ...state,
                counter: state.counter + value
            }
        }
    },

    effects: (dispatch)  => ({
        //API calls will go here
        incrementCounter(value) {
            dispatch.core.addToCounter(value)
        }

    })
}