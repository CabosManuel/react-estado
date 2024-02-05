import { Component } from "react";
import { Loading } from "./Loading";

class ClassState extends Component {
  constructor(props) {
    super(props);

    // En las clases solo se puede crear 1 SOLO ESTADO (un objeto con varias propiedades)
    this.state = {
      error: false,
      loading: false,
    };
  }

  // Métodos del ciclo de vida:

  // Se ejecuta inmediatamente después del constructor
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount');
  }

  // Se ejecuta cuando el componente se agregue por primera vez (se monte)
  componentDidMount() {
    console.log('componentDidMount');
  }

  // Se ejecuta inmediatamente después que el estado se actualize o una prop lo llame de nuevo
  componentDidUpdate() {
    console.log('componentDidUpdate');

    // Solo cuando el estado de loading sea true, hacer un timeout y cambiar estado a false
    if (this.state.loading) {
      setTimeout(() => {
        console.log('Validation data...');
        this.setState({loading: false});
        console.log('Validation complete!');
      }, 2000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad.</p>
        <input placeholder="Código de seguridad"/>
        <button onClick={
          () =>
            this.setState({loading: true})
          }
        >Enviar</button>

        { (this.state.error)
          ? <p style={{color: "red"}}>Error</p>
          : null
        }

        { (this.state.loading)
          ? <Loading/>
          : null
        }
      </div>
    );
  }
}

export { ClassState };