import { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  render() {
    return (
      <div>
        {this.state.showModal && <Modal onClose={this.toggleModal}><img src="" alt="" /></Modal>}
    </div>
  );
  }
};

export default App;
