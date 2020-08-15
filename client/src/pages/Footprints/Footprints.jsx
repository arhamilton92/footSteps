import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "../../app.css";
import logo from "../../images/FPLogo.png";
import "./footprints.css";

const Footprints = ({ setIsSidebarOpen }) => {
  // Setting our component's initial state
  const [notes, setNotes] = useState([]);

  // Load all books and store them with setBooks
  useEffect(() => {
    loadNotes();
  }, []);

  // Loads all books and sets them to books
  function loadNotes() {
    API.getNotes()
      .then((res) => {
        setNotes(res.data.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div id="footprintsBody" className="backgroundImage">
      <img className="footprintsPageLogo" src={logo} alt="footprints logo" />
      <div onClick={() => setIsSidebarOpen(false)}>
        <div className="uk-flex-center" uk-grid>
          <div id="footprintsDivs">
            <div
              className="uk-child-width-1-2@s uk-child-width-1-3@m"
              uk-grid="masonry: true"
            >
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 100 }}
                >
                  Item
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 130 }}
                >
                  Item
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 150 }}
                >
                  Item
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 160 }}
                >
                  Item
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 120 }}
                >
                  Item
                </div>
              </div>
              <div>
                <div
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  style={{ height: 140 }}
                >
                  Item
                </div>
              </div>
            </div>
          </div>
          <div class="uk-flex-first"></div>
        </div>

        {notes.map((note) => (
          <p key={note._id}>{note.content}</p>
        ))}
      </div>
    </div>
  );
};

export default Footprints;
