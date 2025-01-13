import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [
    { id: 1, label: "Task 1", isComplet: true },
    { id: 2, label: "Task 2", isComplet: false },
    { id: 3, label: "Task 3", isComplet: true },
    { id: 4, label: "Task 4", isComplet: false },
  ],
};
const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    supprimer: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    terminer: (state, action) => {
      state.tasks = state.tasks.find((task) => task.id === action.payload
          ? {...task,isComplet : !task.isComplet}
          :task
    );
    },
  },
});
export const {supprimer,terminer} = slice.actions
export default slice.reducer
