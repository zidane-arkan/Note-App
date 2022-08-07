import React from 'react';
import List from './List';

function ActiveList(props) {
    
    const filterNotes = props.userNotes.filter(notes => (notes.archived !== true));
    // console.log(filterNotes);
    const userNoteLists = filterNotes.map((notes) => {
        return <List updateNote={props.updateNoteHandler} deleteNote={props.deleteNoteHandler} key={`Ksdas_${notes.id}`} notes={notes} />;
    });
    
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-0">
                <h3>Catatan Aktif</h3>
            </div>
            <div className="flex xl:w-[100%] flex-wrap flex-row gap-8 justify-start text-center">
                {(userNoteLists.length > 0) ? userNoteLists : <h4>Tidak Ada Catatan</h4>}
            </div>
        </section>
    );
}

export default ActiveList;