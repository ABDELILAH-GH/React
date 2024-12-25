const initialState = {
  tasks: [
    { id: 1, label: "taskA", isComplet: false },
    { id: 2, label: "taskB", isComplet: true },
    { id: 3, label: "taskC", isComplet: false },
    { id: 4, label: "taskD", isComplet: true },
  ],
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SUPPRIMER":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TERMINER":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isComplet: !task.isComplet }
            : task
        ),
      };
    default:
      return state;
  }
}
