import { Component } from "react";
import { ButtonWrapper } from "./Button.styled";

class Button extends Component {
    render() {
        return (
        <ButtonWrapper type="button" onClick={this.props.onClick}>{this.props.children}</ButtonWrapper>
    )}
}

export default Button;