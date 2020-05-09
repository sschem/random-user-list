import React from 'react';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

const UserFilter = (props) => {
    const { onTextChange, visible, text } = props;
    return (
        visible &&
        <div style={{ margin: "10 0 10 0" }}>
            <TextField
                autoFocus
                value={text}
                label="Filtrar por Nombre"
                variant="outlined"
                size="small"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    )
                }}
                onChange={(e) => onTextChange(e.target.value)}
            />
        </div>
    );
}

export default UserFilter;