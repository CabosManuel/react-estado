import { useEffect, useState } from "react";

const SECURITY_CODE = 'usestate';

function UseState({ name }) {
  // useState Compuesto
  const [state, setState] = useState({
    error: false,
    loading: false,
    value: ''
  });

  // useState Independiente
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  console.log(state);

  useEffect(() => {
    console.log('********* Start useEffect() *********');

    if (state.loading) {
      setState({ ...state, ...state, error: false });

      setTimeout(() => {
        console.log('Validation data...');
        // if (value !== SECURITY_CODE) { // useSate Independiente
        if (state.value !== SECURITY_CODE) { // useState Compuesto
          setState({ ...state, error: true });
        }

        setState({ ...state, loading: false });

        console.log('Validation complete!');
      }, 2000);
    }

    console.log('********** End useEffect() **********');
  }, [state.loading]);

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
        ? <p style={{color: "red"}}>Error: useState "error" default value is true</p>
        : null
      }
    </div>
  );
}

export { UseState };