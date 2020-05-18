import React from 'react';

const withSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <div>Loading</div>
        ) : (<WrappedComponent {...otherProps}/> );

    };
    return Spinner;
};

export default withSpinner;