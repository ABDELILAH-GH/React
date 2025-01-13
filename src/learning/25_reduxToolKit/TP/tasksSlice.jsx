import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, label: 'taskA', isComplet: false },
    { id: 2, label: 'taskB', isComplet: true },
    { id: 3, label: 'taskC', isComplet: false },
    { id: 4, label: 'taskD', isComplet: true },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    supprimer: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    terminee: (state, action) => {
      state.tasks.find(task=>task.id === action.payload 
        ? task.isComplet = !task.isComplet
        :task
      )
    },
  },
});

export const { supprimer, terminee } = tasksSlice.actions;

export default tasksSlice.reducer;
