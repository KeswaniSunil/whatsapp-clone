import createDataContext from './createDataContext';
const userReducer = (state , action)=>{
    switch(action.type){
        case actionTypes.SET_USER:
            return {...state,user:action.payload}
        default:
            return state;
    }
};

const actionTypes={
    SET_USER:"SET_USER"
};

const signInUser=dispatch=> (user)=>{
    // const response=await TrackerApi.get('/tracks');    
    // console.log("User= "+user.displayName);
    dispatch({type:actionTypes.SET_USER,payload:user}) 
}
// const createTracks=dispatch=>async (name,location)=>{
//     await TrackerApi.post("/tracks",{name,location});
// }
export const {Context,Provider} = createDataContext(
    userReducer,
    // {fetchTracks , createTracks},
    {signInUser},
    //state objects and their default value.As in this we are only return ony value so no need to provide it in here
    {
        user:null
    }
)
