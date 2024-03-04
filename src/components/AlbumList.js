import {useFetchAlbumsQuery, useAddAlbumMutation} from "../store";
import Button from "./Button";
import AlbumListItem from "./AlbumListItem";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (!data) {
        content = 'Error loading albums';
    } else {
        content = data.map((album) => <AlbumListItem key={album.id} album={album}/> )
    }

    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold"> Albums for { user.name } </h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>+ Add Album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumList;
