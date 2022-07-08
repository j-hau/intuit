const { v4: uuidv4 } = require('uuid');

export const core = {
    state: {
        counter: 0,
        transactions: [
        { date: '10/10/2010', description: 'Rent', refNumber: uuidv4(), amount: "-£63" }, 
        { date: '11/11/2011', description: 'Phone Bill', refNumber: uuidv4(), amount: "-£14" },
        { date: '12/12/2012', description: 'Pay day', refNumber: uuidv4(), amount: "+£1500" }
    ]
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