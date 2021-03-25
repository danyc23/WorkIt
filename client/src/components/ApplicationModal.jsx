import React from "react";

export default function ApplicationModal() {
  return (
    <form className="modal">
      <div className="modal-main">
        <div className="modal-title__section">
          <label className="applicant-form__label modal-label" for="name">
            First Name
          </label>
          <input className="modal-input" type="text" />
        </div>
        <div className="modal-title__section">
          <label className="applicant-form__label modal-label" for="lastName">
            Last Name
          </label>
          <input className="modal-input" type="text" />
        </div>
        <div className="modal-title__section">
          <label className="applicant-form__label modal-label" for="email">
            Email
          </label>
          <input className="modal-input" type="text" />
        </div>
        <div className="modal-title__section">
          <label className="applicant-form__label modal-label" for="salary">
            Salary
          </label>
          <input className="modal-input" type="text" />
        </div>
        <div className="modal-title__section">
          <label className="applicant-form__label modal-label" for="phone">
            phone Number
          </label>
          <input className="modal-input" type="text" />
        </div>
        <div className="modal-title__section">
          <label className="applicant-form__label modal-label" for="resume">
            Resume
          </label>
          <input className="modal-input" name="resume" type="file" />
        </div>
        <div>
          <button className="  modal-btn">Submit</button>
        </div>
      </div>
    </form>
  );
}
