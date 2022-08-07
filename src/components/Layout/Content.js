import React from 'react';

function Content(props) {
    return (
        <div className="w-full h-auto flex flex-col gap-8 xl:mt-[11rem] px-20 py-8 bg-[#f6f8fa] rounded-tl-xl">
            {props.children}
        </div>
    );
}

export default Content;