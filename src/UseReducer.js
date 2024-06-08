const initialState = {
    error: false,
    loading: false,
    value: '',
    deleted: false,
    confirmed: false,
}

// const reducer = (state, action) => {
// }

// 1ra Forma de crear un Reducer: Usando condicionales
const reducer = (state, action) => {
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
  } else {
    return {
      ...state,
    }
  }
}

// 2ra Forma de crear un Reducer: Usando switch (más común)
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