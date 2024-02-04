import { useState } from "react";

function UseState({ name }) {
  const [error, setError] = useState(false);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Escribe el código de seguridad.</p>
      <input placeholder="Código de seguridad"/>
      <button onClick={() => setError(!error)}>Enviar</button>

      { (error)
        ? <p style={{color: "red"}}>Error: useState "error" default value is true</p>
        : null
      }
    </div>
  );
}

export { UseState };