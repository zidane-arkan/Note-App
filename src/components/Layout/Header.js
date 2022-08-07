import React, {useState} from 'react';

function Header(props) {
    const [searchText, setSearchText] = useState('');
    const searchNote = (e) => { 
        // console.log(e.target.value.toLowerCase());
        setSearchText(e.target.value.toLowerCase());
        props.searchNoteHandler(searchText);
    };
    return (    
        <div className="absolute flex flex-row gap-1 top-0 bg-white w-[100%] h-auto p-12 z-[-1px]">
            <div className="flex flex-row w-[60%] xl:w-[70%] items-center justify-between mx-auto ">
                <span>
                    <h1>CATAT AJA!</h1>
                </span>
                <span>
                    <input onChange={searchNote} className="rounded-xl bg-[#f6f8fa] p-4" type="search" class="form-control" name="" placeholder="Cari..."/>
                </span>
            </div>
        </div>
    );
}

export default Header;