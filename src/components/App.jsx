import { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  state = {
    showModal: false
  }

  render() {
    return (
      <div>
        <Modal/>
    </div>
  );
  }
};

export default App;
