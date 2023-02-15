
export const AddToFav = () => (payload) => {
    return{
        type: "ADD_TO_FAV",
        payload

    }
  }
  export const RemoveFromFav=(payload) =>{
    return {
        type: "REMOVE",
        payload
    }
}
 export const Counter=(payload) =>{
    return {
        type: "CHANGECOUNT",
        payload
    }
}