// initial state
type blogType ={
    img:string,
    id:string,
    title:string,
    decs:string
}


const blogState:blogType[]=[];


// reducer

export const blogReducer = (state=blogState, action:any) =>{
    switch (action.type){
        case "ADD_BLOG":
            return [...state,action.blog];
        case "UPTADE_BLOG":
            return state.map(b=>{
                if (b.id === action.id){
                    return {
                        ...b,
                        ...action.uptade
                    }
                }else{
                    return b
                }
            });
        case "REMOVE_BLOG":
            return state.filter(({id})=>{
                return id !== action.id
            });
            default:
                return state;
    }
};