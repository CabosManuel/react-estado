import { Component } from "react";

class Loading extends Component {
  // Se ejecuta antes de que el componente sea eliminado (desmontado)
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <p>Loading...</p>
    );
  }
}

export { Loading };