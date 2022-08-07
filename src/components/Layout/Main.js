import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import AddForm from '../Form/AddForm';
import ArchiveLists from '../Notes/ArchiveLists';
import ActiveList from '../Notes/ActiveLists';

function Main() {
    const [userNotes, setUserNotes] = useState([
        {
            id: "1",
            title: "Babel",
            body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: "2",
            title: "Functional Component",
            body: "Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: "3",
            title: "Modularization",
            body: "Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: "4",
            title: "Lifecycle",
            body: "Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: "5",
            title: "ESM",
            body: "ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
        },
        {
            id: "6",
            title: "Module Bundler",
            body: "Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.",
            createdAt: '2022-04-14T04:27:34.572Z',
            archived: false,
        },
    ]);
    //Add New Notes
    const addNotesHandler = (newNote) => {
        setUserNotes((prevData) => {
            return [newNote, ...prevData];
        });
    };
    //Delete Note
    const deleteNoteHandler = (noteId) => {
        setUserNotes((prevNote) => {
            console.log(noteId);
            return prevNote.filter(note => noteId !== note.id);
        });
    };
    //Update Note Properties
    const updateNoteHandler = (noteId) => {
        // console.log(noteId);
        setUserNotes((prevData) => {
            return prevData.map((note) => {
                if (noteId === note.id) {
                    note.archived = (!note.archived ? true : false);
                }
                return note;
            });
        });
    };
    //Search Note
    const searchNoteHandler = (searchTextTitle) => {
        const filterSearchNotes = userNotes.filter((notes) => {
            console.log(searchTextTitle.length);
            if (searchTextTitle.length === '') {
                return notes;
            } else {
                return notes.title.toLowerCase().includes(searchTextTitle);
            }
        });
       
        setUserNotes(filterSearchNotes);
    };
    return (
        <div className="w-full h-auto flex flex-row gap-0 items-start justify-start relative">
            <Sidebar />
            <Header searchNoteHandler={searchNoteHandler} />
            <Content>
                <AddForm addNotesHandler={addNotesHandler} />
                <ActiveList updateNoteHandler={updateNoteHandler} deleteNoteHandler={deleteNoteHandler} userNotes={userNotes} />
                <ArchiveLists updateNoteHandler={updateNoteHandler} deleteNoteHandler={deleteNoteHandler} userNotes={userNotes} />
            </Content>
        </div>
    );
}

export default Main;