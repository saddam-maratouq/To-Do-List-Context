

export const Reducer = (state,action) => {
   
    if(action.type ==='ADD_TODO') {
        return {

            ...state , 
            Tasks : [  action.paylod , ...state.Tasks ]
        }
    }
}

