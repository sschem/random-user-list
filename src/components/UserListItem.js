import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';

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
                        <Typography component="span" variant="body2" style={{ display: 'inline' }} color="textPrimary">
                            Teléfono:&nbsp;
                        </Typography>
                        {user.allPhones}
                        <br></br>
                        <Typography component="span" variant="body2" style={{ display: 'inline' }} color="textPrimary">
                            Dirección:&nbsp;
                        </Typography>
                        {user.fullAddress}
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