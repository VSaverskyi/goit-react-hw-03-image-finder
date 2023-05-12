import { Component } from "react";
import { Overlay, ModalWrapper } from "./Modal.styled";

class Modal extends Component {
    componentDidMount() { }
    
    componentDidUpdate() { }
    
    render() {
        return (
            <Overlay>
                <ModalWrapper>
                    <img src="" alt="" />
                </ModalWrapper>
            </Overlay>
        )
    }
}

export default Modal;