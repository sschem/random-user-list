import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import TitleDescription from '../components/TitleDescription';

const UserListItem = (props) => {
    const { user, onUserSelected } = props;
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar style={{ width: 50, height: 50 }} alt={user.name.first} src={user.picture.medium} />
            </ListItemAvatar>
            <ListItemText
                primary={user.fullName}
                secondary={
                    <React.Fragment>
                        <TitleDescription title="Teléfono" description={user.allPhones} />                        
                        <TitleDescription title="Dirección" description={user.fullAddress} />
                    </React.Fragment>
                }
            />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="Ver más"
                    color="primary"
                    onClick={() => onUserSelected(user)}
                >
                    <ContactMailTwoToneIcon style={{ fontSize: 30 }} />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default UserListItem;