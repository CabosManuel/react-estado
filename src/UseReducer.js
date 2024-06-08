const initialState = {
    error: false,
    loading: false,
    value: '',
    deleted: false,
    confirmed: false,
}

// const reducer = (state, action) => {
// }

// --------------------------
// Formas de crear un Reducer
// --------------------------

// 1. Usando condicionales
const reducer = (state, action) => {

  // Diferentes tipos de estado
  if(action.type === 'ERROR') {
    return {
      ...state, // El estado anterior
      error: true,
      loading: false,
    };
  } else if (action.type === 'CHECK') {
    return {
      ...state,
      loading: true,
    };
  } else { // Siempre un estado por defecto
    return {
      ...state,
    }
  }
}

// Usando switch (más común)
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return {
        ...state, // El estado anterior
        error: true,
        loading: false,
      };
    case 'CHECK':
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      }
  }
}

// 3ra Forma de crear Reduce: Reduce Object
const reducerObject = (state) => ({
  'ERROR': {
    ...state, // El estado anterior
    error: true,
    loading: false,
  },
  'CHECK': {
    ...state,
    loading: true,
  }
});

const reducerAction = (state, action) => {
  return reducerObject(state)[action.type] || state;
}