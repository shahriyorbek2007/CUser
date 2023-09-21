import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import "./FormEvents.css";
function FormEvents({ setModal, addUsers }) {
  const form = useRef();
  const [user, setUser] = useState({
    id: uuidv4(),
    imageUrl: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: " ",
    gender: "",
  });
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);
    addUsers(user);
    form.current.reset();
  };

  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <label htmlFor="">
              <span>Image URL:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, imageUrl: e.target.value };
                  });
                }}
                type="url"
                required
              ></input>
            </label>
            <label htmlFor="">
              <span>First Name:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return {
                      ...prev,
                      firstName: e.target.value,
                    };
                  });
                }}
                type="text"
                required
              ></input>
            </label>
            <label htmlFor="">
              <span>Age:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, lastName: e.target.value };
                  });
                }}
                type="number"
                required
              ></input>
            </label>
            <label htmlFor="">
              <span>From:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, from: e.target.value };
                  });
                }}
                type="text"
                required
              ></input>
            </label>
            <label htmlFor="">
              <span>Job:</span>
              <input
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
                type="text"
                required
              ></input>
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label htmlFor="">
                <small>Male</small>
                <input
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                  type="radio"
                  required
                  name="gender"
                  value="male"
                />
              </label>
              <label htmlFor="">
                <small>Female</small>
                <input
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, gender: e.target.value };
                    });
                  }}
                  type="radio"
                  required
                  name="gender"
                  value="Female"
                />
              </label>
            </div>
            <button className="modal-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormEvents;
