import GalleryItemImg from "components/GalleryItemImg";
import { ImageGalleryList } from "components/ImageGallery/ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem";
import Button from "components/Button";
import { Component } from "react";
import Modal from "components/Modal";

class ImagesDataView extends Component {
    state = {
        showModal: false,
        imgData: null,
    }

    toggleModal = () => {
        this.setState(state => ({
        showModal: !state.showModal
        }
        ))
    }

    handleItemClick = (imgData) => {
        this.setState({ imgData });
        this.toggleModal();
    }

    render() {
        const { images, onClick } = this.props;
        const { imgData } = this.state;
        return (
        <div>
            {images.length === 0 ? <p>Images not found!</p> :
            <ImageGalleryList>
                {
                images.map(image => {
                    return (
                        <ImageGalleryItem key={image.id} onClick={this.handleItemClick} image={image}>
                            <GalleryItemImg
                                url={image.webformatURL}
                                description={image.tags}
                            />
                        </ImageGalleryItem>
                    )
                })
                }
                <Button onClick={onClick}>Load more</Button>
            </ImageGalleryList>
            }
            {this.state.showModal &&
                <Modal
                onClose={this.toggleModal}>
                <img src={imgData.largeImageURL} alt={imgData.tags} />
                </Modal>
            }
        </div>
    )
    }
    
}

export default ImagesDataView;