import { useEffect, useState } from "react";

const SECURITY_CODE = 'usestate';

function UseState({ name }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  console.log(value);

  useEffect(() => {
    console.log('********* Start useEffect() *********');

    if (loading) {
      setError(false);

      setTimeout(() => {
        console.log('Validation data...');
        if (value !== SECURITY_CODE) {
          setError(true);
        }

        setLoading(false);

        console.log('Validation complete!');
      }, 2000);
    }

    console.log('********** End useEffect() **********');
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad.</p>
      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Enviar</button>

      { (loading)
        ? <p>Loading...</p>
        : null
      }

      { (error)
        ? <p style={{color: "red"}}>Error: useState "error" default value is true</p>
        : null
      }
    </div>
  );
}

export { UseState };