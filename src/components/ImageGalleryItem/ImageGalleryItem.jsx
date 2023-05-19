import { Component } from "react";
import { ImageGalleryListItem } from "./ImageGalleryItem.styled";

class ImageGalleryItem extends Component {
    render() {
        const { onClick, image } = this.props;

        return (
            <ImageGalleryListItem onClick={() => onClick(image)} >{this.props.children}</ImageGalleryListItem>
        )
    }
}

export default ImageGalleryItem;