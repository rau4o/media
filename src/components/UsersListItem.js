import {useThunk} from "../hooks/use-thunk";
import {removeUser} from "../store";
import Button from "./Button";
import {GoTrashcan} from "react-icons/go";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";

function UsersListItem({user}) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }

    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan/>
    </Button>
        {error && <div>Error deleting user</div>}
        {user.name}
    </>

    return (
        <ExpandablePanel header={header}>
            <AlbumList user={user}/>
        </ExpandablePanel>
    )
}

export default UsersListItem;
