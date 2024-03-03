import {useFetchAlbumsQuery} from "../store";
import ExpandablePanel from "./ExpandablePanel";

function AlbumList({ user }) {
    const { data, error, isLoading } = useFetchAlbumsQuery(user);
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
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}

export default AlbumList;
