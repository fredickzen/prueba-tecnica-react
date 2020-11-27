import React from 'react';

const PrintFormObject = ({formObject}) => {
    return (
        <div>
            {JSON.stringify(formObject)}
        </div>
    );
}

export default PrintFormObject;
