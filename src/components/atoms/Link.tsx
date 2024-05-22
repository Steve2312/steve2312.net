import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

type Props = {
    className?: string;
    children?: React.ReactNode;
};
const Link: React.FC<Props> = (props) => {
    return (
        <div className="relative inline-flex cursor-pointer items-center gap-2 mr-auto z-10 hover:after:scale-x-100 after:scale-x-0 after:origin-left after:absolute after:bottom-0 after:border-b-2 after:border-current after:transition-all after:w-full">
            <a className={props.className}>{props.children}</a>
            <BiRightArrowAlt className="text-xl" />
        </div>
    );
};

export default Link;
