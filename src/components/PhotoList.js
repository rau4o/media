import {useAddPhotoMutation, useAddPhotoQuery, useFetchPhotosQuery} from "../store";
import PhotoListItem from "./PhotoListItem";
import Button from "./Button";

function PhotoList({ album }) {
    const { data, error, isLoading } = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResults] =  useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    }

    let content;
    if (!data) {
        content = 'Error loading photos'
    } else {
        content = data.map((photo) => <PhotoListItem key={photo.id} photo={photo}/>)
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos in {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
                    + Add photo
                </Button>
            </div>
            <div className="mx-8 flex flex-wrap justify-center">{content}</div>
        </div>
    )
}

export default PhotoList;
