export const  increment = () => ({
type : 'INCREMENT'
})
export const incrementByVal = (value) => ({
   type : 'INCREMENT_BY_VAL',
   payload : value
})