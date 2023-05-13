import { Component } from "react";
import { Overlay, ModalWrapper } from "./Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.hahndleKeyDown)
     }
    
    componentDidUpdate() { }
    
    componentWillUnmount() {
    window.removeEventListener('keydown', this.hahndleKeyDown)
    }

    hahndleKeyDown = e => {
         if (e.code === 'Escape') {
            this.props.onClose();
        }
    }
    
    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <Overlay onClick={this.handleOverlayClick}>
                <ModalWrapper>
                    {this.props.children}
                </ModalWrapper>
            </Overlay>,
            modalRoot,
        );
    }
}



export default Modal;