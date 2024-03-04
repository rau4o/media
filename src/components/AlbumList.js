import {useFetchAlbumsQuery, useAddAlbumMutation} from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
    useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    }

    let content;
    if (!data) {
        content = 'Error loading albums';
    } else {
        content = data.map((album) => {
            const header = <div>{album.title}</div>;

            return <ExpandablePanel key={album.id} header={header}>
                List of albums
            </ExpandablePanel>
        })
    }

    return (
        <div>
            <div>
                Albums for { user.name }
                <Button onClick={handleAddAlbum}>+ Add Album</Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumList;
