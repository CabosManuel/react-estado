import { Component } from "react";

class ClassState extends Component {
  // En las clases solo se puede crear 1 SOLO ESTADO
  constructor(props) {
    super(props);

    this.state = {
      error: false
    };
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad.</p>
        <input placeholder="Código de seguridad"/>
        <button onClick={
          () =>
            this.setState(prevState => ({error: !prevState.error}))
          }
        >Enviar</button>

        { (this.state.error)
          ? <p style={{color: "red"}}>Error</p>
          : null
        }
      </div>
    );
  }
}

export { ClassState };