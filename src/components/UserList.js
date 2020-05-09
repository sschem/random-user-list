import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import UserListItem from '../components/UserListItem';

const UserList = (props) => {
    const { visible, userList, onUserSelected } = props;
    return (
        visible &&
        <List>
            {
                userList !== undefined &&
                userList.map((user) =>
                    <div key={user.id.value}>
                        <UserListItem user={user} onUserSelected={onUserSelected} />
                        <Divider variant="inset" component="li" />
                    </div>
                )
            }
        </List>
    );
}

export default UserList;