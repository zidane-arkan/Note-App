import React from 'react';
import deleteImg from '../../assets/delete.png';
import archiveImg from '../../assets/archive.png';

function List(props) {
    //Format Date
    const showFormattedDate = (date) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };
        return new Date(date).toLocaleDateString("id-ID", options);
    };
    const formatDate = showFormattedDate(props.notes.createdAt);
    //Delete Note Handler
    const deleteNote = (e) => {
        props.deleteNote(e.target.parentNode.id);
    };
    //Update Achived Properties from Note Object
    const updateNote = (e) => {
        props.updateNote(e.target.parentNode.id);
    };
    return (
        <section className={'card__box card__active'}>
            <div className="card__content flex flex-col gap-4">
                <div className="card__title flex flex-col gap-0 items-start text-left">
                    <p>{formatDate}</p>
                    <h4 class="capitalize">{props.notes.title}</h4>
                </div>
                <span className="w-[100%] h-[2px] bg-slate-500"></span>
                <span class="w-[100%] text-left">
                    <p>{props.notes.body}</p>
                </span>
            </div>
            <div id={props.notes.id} className="card__button flex flex-row items-center gap-8">
                <img src={deleteImg} alt="deleteImg" onClick={deleteNote} />
                <img src={archiveImg} alt="archiveImg" onClick={updateNote} />
            </div>
        </section>
    );
}

export default List;