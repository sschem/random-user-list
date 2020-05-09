import React from 'react';
import Typography from '@material-ui/core/Typography';

const TitleDescription = (props) => {
    const {title, description} = props;
    return (
        <React.Fragment>
            <Typography component="span" variant="body2" style={{ display: 'inline' }} color="textPrimary">
                {title}:&nbsp;
            </Typography>
            <Typography component="span" variant="body2" style={{ display: 'inline' }} color="textSecondary">
                {description}
            </Typography>
            <br></br>
        </React.Fragment>
    );
}

export default TitleDescription;