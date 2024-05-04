import React, { useEffect, useState } from "react";

const SECURITY_CODE = 'platzi';

function UseState({ name }) {
  // useState Compuesto
  const [state, setState] = useState({
    error: false,
    loading: false,
    value: '',
    deleted: false,
    confirmed: false
  });

  // useState Independiente
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState('');

  console.log('before', state);

  useEffect(() => {
    console.log('********* Start useEffect() *********');

    // Si el estado de loading es true
    if (state.loading) {
      setState({ ...state, error: false }); // Estado de error: false

      setTimeout(() => {
        console.log('Validation data...');
        // if (value !== SECURITY_CODE) { // useSate Independiente
        
        // useState Compuesto ------------------------------------
        if (state.value !== SECURITY_CODE) {
          setState({ ...state, loading: false, error: true });

          // Borrar el mensaje de error después de unos segundos
          setTimeout(() => {
            setState({ ...state, loading: false, error: false });
          }, 5000);

        } else {
          setState({ ...state, loading: false, confirmed: true });
        }

        console.log('Validation complete!');
      }, 2000);
    }

    console.log('********** End useEffect() **********');
  }, [state.loading]);

  // Estos if están encapsulando diferentes vistas, diferentes return
  if (!state.deleted && !state.confirmed) {
    // Vista normal
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Escribe el código de seguridad.</p>
        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(event) => {
            setState({ ...state, value: event.target.value });
          }}
        />
        <button onClick={() => setState({ ...state, loading: true })}>Enviar</button>
  
        { (state.loading)
          ? <p>Loading...</p>
          : null
        }
  
        { (state.error)
          // ? <p style={{color: "red"}}>Error: useState "error" default value is true</p>
          ? <p style={{color: "red"}}>Error: Código de seguridad incorrecto.</p>
          : null
        }
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    // Vista cuando sea confirmado y no eliminado
    return (
      <div>
        <p>¿Estás seguro que quieres eliminar UseState?</p>
        
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true
            });
          }}
        >
          Confirmar
        </button>

        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value: ''
            });
          }}
        >
          Cancelar
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Deleted!</p>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: ''
            });
          }}
        >
          Deshacer eliminación
        </button>
      </div>
    );
  }

}

export { UseState };