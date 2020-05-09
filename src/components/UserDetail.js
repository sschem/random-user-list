import React from 'react';

const UserDetail = (props) => {
    const { visible, user } = props;
    return (
        visible &&
        <div>DETALLE DE USUARIO...</div>
    );
}

export default UserDetail;