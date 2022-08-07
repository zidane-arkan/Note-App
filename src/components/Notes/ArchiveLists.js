import React from 'react';
import List from './List';

function ArchiveLists(props) {
    const filterNotes = props.userNotes.filter((notes) => { return notes.archived !== false; });
    const userNoteLists = filterNotes.map((notes) => {
        return <List updateNote={props.updateNoteHandler} deleteNote={props.deleteNoteHandler} key={`Ksdas_${notes.id}`} notes={notes} />;
    });
    return (
        <section className="flex flex-col gap-6">
            <div className="flex flex-col gap-0">
                <h3>Arsip Catatan</h3>
            </div>
            <div className="flex xl:w-[100%] flex-wrap flex-row gap-8 justify-start">
                {(userNoteLists.length > 0) ? userNoteLists : <h4>Tidak Ada Catatan Yang Diarsipkan</h4>}
            </div>
        </section>
    );
}

export default ArchiveLists;