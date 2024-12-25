export const increment = () => ({
   type: "INCREMENT",
 });
export const reset = () => ({
   type: "RESET",
 });
 
export const minus = () => ({
   type: "MINUS",
 });
 
 export const incrementByValue = (value) => ({
   type: "INCREMENT_BY_VALUE",
   payload: value,
 });
 export const minusByValue = (value) => ({
   type: "MINUS_BY_VALUE",
   payload: value,
 });
 