import { Component } from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'classstate';

class ClassState extends Component {
  constructor(props) {
    super(props);

    // En las clases solo se puede crear 1 SOLO ESTADO (un objeto con varias propiedades)
    this.state = {
      error: false,
      loading: false,
      value: '',
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

        if (SECURITY_CODE === this.state.value) {
          this.setState({ loading: false, error: false });
        } else {
          this.setState({ loading: false, error: true });
        }

        console.log('Validation complete!');
      }, 1500);
    }
  }

  render() {
    const { error, loading, value } = this.state;

    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Escribe el código de seguridad.</p>
        <input
          placeholder="Código de seguridad"
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
        />
        <button onClick={
          () =>
            this.setState({loading: true})
          }
        >Enviar</button>

        { ( error && !loading )
          ? <p style={{color: "red"}}>Error</p>
          : null
        }

        { (loading)
          ? <Loading/>
          : null
        }
      </div>
    );
  }
}

export { ClassState };