import React from 'react';

type Props = {
    loading: boolean;
};
export const PageLoader: React.FC<Props> = (props) => {
    return (
        <div
            className={`fixed h-screen w-screen flex justify-center bg-white items-center z-[100] transition-all ${
                !props.loading && 'opacity-0 pointer-events-none'
            }`}
        >
            <p>Please wait while the website loads...</p>
        </div>
    );
};
