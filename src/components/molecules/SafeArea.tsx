import React from 'react';

type Props = {
    className?: string;
    children?: React.ReactNode;
};
const SafeArea: React.FC<Props> = (props) => {
    return (
        <div
            className={`${props.className} max-w-7xl mx-auto p-10 md:py-40 py-20`}
        >
            {props.children}
        </div>
    );
};

export default SafeArea;
