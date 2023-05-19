import { ListItemImg } from "./GalleryItemImg.styled";

const GalleryItemImg = ({url, description, largeUrl}) => {
    return (
        <ListItemImg src={url} alt={description} itemData={largeUrl} />
    )
    
}

export default GalleryItemImg;