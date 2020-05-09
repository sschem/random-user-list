import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = (props) => {
    const { visible } = props;
    return (
        visible && <CircularProgress size={50} />
    );
}

export default Spinner;