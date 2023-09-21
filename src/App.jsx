import "./App.css";

// Hooks
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/userList";
import FormEvents from "./components/form/FormEvents";

function App() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);

  const handleDelete = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });

    // const filterData = users.filter((user) => {
    //   return user.id !== id;
    // });
    // setUsers(filterData);
  };
  // Close Modal

  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setModal(false);
    }
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  // addUsers

  const addUsers = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No users</h2>}
        </div>
        <UserList users={users} handleDelete={handleDelete} />
      </main>
      <button
        onClick={() => {
          setModal(true);
        }}
        className="create-user"
      >
        Create user
      </button>
      {modal && <FormEvents setModal={setModal} addUsers={addUsers} />}
      <Footer />
    </div>
  );
}
export default App;
