import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "Hasan", email: "hasanulusoy78@hotmail.com" },
    { name: "Hasan", email: "hsnulusoy32@gmail.com" },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="App-header gap-5 mb-auto">
        <div className="d-flex align-items-center gap-3">
          <img
            src="./images/logo.png"
            className="App-logo"
            style={{ height: "60px", padding: "4px", borderRadius: "10px" }}
          ></img>
          <h2 className=" ml-5">CRUD App</h2>
        </div>
        <div className="d-flex align-items-center gap-3">
          <h4 className="">Unit Test</h4>
          <img src="./images/test.png" style={{ width: "50px" }}></img>
        </div>
      </header>
      <div
        className="p-3 d-flex flex-column gap-3"
        style={{ marginTop: "80px" }}
      >
        <UserForm addUser={addUser} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
