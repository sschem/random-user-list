import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TitleDescription from '../components/TitleDescription';

const UserDetail = (props) => {
    const getFormatedDateOfBirthday = (user) => {
        const date = new Date(user.dob.date);
        return date.toLocaleDateString('es-AR');
    }

    const { visible, user, onBackPress } = props;

    return (
        visible &&
        <Card style={{ minWidth: 300, maxWidth: 400 }}>
            <CardHeader
                avatar={<Avatar style={{ backgroundColor: 'orange' }}>{user.name.title}</Avatar>}
                title={user.fullName}
                subheader={getFormatedDateOfBirthday(user)}
            />
            <CardMedia
                style={{ height: 0, paddingTop: '56.25%'/*16:9*/, objectFit: 'contain' }}
                image={user.picture.large}
                title={user.name.first}
            />
            <CardContent style={{ textAlign: 'left', lineHeight: "10px" }}>
                <TitleDescription title="Email" description={user.email} />
                <TitleDescription title="Teléfono móvil" description={user.cell} />
                <TitleDescription title="Teléfono de línea" description={user.phone} />
                <br></br>
                <TitleDescription title="Nombre" description={user.name.first} />
                <TitleDescription title="Apellido" description={user.name.last} />
                <TitleDescription title="Edad" description={user.dob.age} />
                <br></br>
                <TitleDescription title="Pais" description={user.location.country} />
                <TitleDescription title="Ciudad" description={user.location.city} />
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="add to favorites"
                    onClick={onBackPress}
                    color="primary"
                >
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default UserDetail;