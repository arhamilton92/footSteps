import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Speech from "./SpeechComp";
import API from "../utils/API";
import Map from "./Map";
import footprintSeeds from "../data/footprintSeeds.json";
import "../pages/Profile/profile.css";

const FootprintsDisplay = (props) => {
  // const [userNotesOnCollectionPage, setUserNotesOnCollectionPage] = useState({
  //   notes: [],
  // });
  const {
    newNoteContent,
    setNewNoteContent,
    location,
    loadUser,
    userNotesOnCollectionPage,
    setUserNotesOnCollectionPage,
  } = props;

  const { id } = useParams();

  useEffect(() => {
    loadUser(id, setUserNotesOnCollectionPage);
  }, []);

  const deleteNote = (noteId) => {
    axios.delete(`/api/note/${noteId}`).then((res) => {
      loadUser(id, setUserNotesOnCollectionPage);
    });
  };

  return (
    <div id="footprints">
      <div uk-grid>
        {userNotesOnCollectionPage.notes.map((note, index) => {
          return (
            <div key={index}>
              <div className="uk-card-default footprintCards">
                <Speech
                  footprintText={note.content}
                  deleteNote={deleteNote}
                  noteId={note._id}
                  parentComponent={"FootprintsDisplay"}
                />
                {note.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FootprintsDisplay;
