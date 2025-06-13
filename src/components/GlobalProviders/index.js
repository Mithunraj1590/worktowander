import React from 'react';
import LenisScroll from '../LenisScroll';

const GlobalProviders = ({children}) => {
    return (
        <>
        <LenisScroll>
            {children}
        </LenisScroll>
        </>
    );
}

export default GlobalProviders;
