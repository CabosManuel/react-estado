import { useEffect, useState } from "react";

function UseState({ name }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('********* Start useEffect() *********');

    if (loading) {
      setTimeout(() => {
        console.log('Validation data...');
        setLoading(false);
        console.log('Validation complete!');
      }, 3000);
    }

    console.log('********** End useEffect() **********');
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad.</p>
      <input placeholder="Código de seguridad"/>
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