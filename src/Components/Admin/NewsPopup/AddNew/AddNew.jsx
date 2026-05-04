import React from 'react';
import './AddNew.css';

export default function AddNew(){
  return (
    <div className="np-add container">
      <h2 className="np-title">Events - Add</h2>
      <div className="np-form-wrap">
        <form className="np-form">
          <div className="np-row">
            <label>Type</label>
            <select className="select-input"><option>Select</option><option>News and Event</option><option>Popup</option></select>
          </div>

          <div className="np-row two">
            <div>
              <label>Publish Date</label>
              <input className="text-input" type="date" />
            </div>
            <div>
              <label>Upto Date</label>
              <input className="text-input" type="date" />
            </div>
          </div>

          <div className="np-row">
            <label>Publish Status</label>
            <div className="np-radio">
              <label><input type="radio" name="pub" defaultChecked/> Publish Now</label>
              <label><input type="radio" name="pub"/> Save as Draft</label>
            </div>
          </div>

          <div className="np-row">
            <label>Display on</label>
            <div className="np-radio">
              <label><input type="radio" name="disp" defaultChecked/> Member panel</label>
              <label><input type="radio" name="disp"/> Website</label>
              <label><input type="radio" name="disp"/> All</label>
            </div>
          </div>

          <div className="np-row">
            <label>Title</label>
            <input className="text-input" type="text" />
          </div>

          <div className="np-row">
            <label>Description</label>
            <textarea className="text-input" rows="6"/>
          </div>

          <div className="btn-row">
            <button type="reset" className="btn-danger">Reset</button>
            <button type="submit" className="btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}
