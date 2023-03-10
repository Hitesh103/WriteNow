import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <ion-icon name="trash-outline" onClick={() => { deleteNote(note._id); props.showAlert("Deleted successfully", "danger") }}></ion-icon>
                    <ion-icon name="create-outline" onClick={() => { updateNote(note) }} ></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Noteitem