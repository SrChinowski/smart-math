
export function Duck(reducer){
    const getConstants = () => {
        const PREFIX = reducer.toLocaleLowerCase();
        const SET_VALUE =`${PREFIX}/SET_VALUE`

        return {PREFIX, SET_VALUE}
    }

    return{
        getConstants,
    }
}