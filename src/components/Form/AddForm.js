import React, { useState } from 'react';

function AddForm(props) {
    //Save Changes Element to State
    const [titleNote, setTitleNote] = useState('');
    const [contentNote, setContentNote] = useState('');
    const [characterCount, setCharacterCount] = useState(50);
    const [isCountLimit, setIsCountLimit] = useState(false);
    //Update Data for State Element
    const updateTitleNote = (e) => {
        setCharacterCount((prevCount) => {
            let count = prevCount;
            if (!isCountLimit) {
                if (e.target.value.length === 50) {
                    console.log(1);
                    setIsCountLimit(true);
                }
                count -= 1;
            }
            if (isCountLimit) {
                if (e.target.value.length === 0) {
                    count = 49;
                    setIsCountLimit(false);
                }
                count += 1;
            }
            return count;
        });
        setTitleNote(e.target.value.slice(0, 50));
    };
    const updateContentNote = (e) => {
        setContentNote(e.target.value);
    };
    //Send Data to Main Component
    const sendNewNote = (e) => {
        e.preventDefault();
        // console.log([titleNote, contentNote]);
        props.addNotesHandler({
            id: (+new Date()).toString(),
            title: titleNote,
            body: contentNote,
            createdAt: new Date().toJSON(),
            archived: false,
        });
        setTitleNote('');
        setContentNote('');
    };
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-0">
                <h3>Tambah Catatan</h3>
            </div>
            <div class="inline-block xl:w-[60%] p-8 bg-[#dff2ff] rounded-2xl">
                <form onSubmit={sendNewNote} className="flex flex-col w-full gap-4 items-start">
                    <div className="flex flex-col gap-2 items-start w-full">
                        <p>Sisa Karakter Anda : <span>{characterCount}</span></p>
                        <input onChange={updateTitleNote} type="text" name="title" id="title" class="form-control" placeholder="Masukkan Judul..." aria-describedby="helpId" value={titleNote} />
                    </div>
                    <textarea onChange={updateContentNote} className="p-4 rounded-xl w-[100%]" cols="30" placeholder="Masukkan Deskripsi..." rows="5" value={contentNote} />
                    <button className="inline-block w-[20%] border-solid border-2 bg-[#615cfd] p-4 rounded-xl" type="submit">Tambah</button>
                </form>
            </div>
        </section>
    );
}

export default AddForm;