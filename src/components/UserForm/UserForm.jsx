import React, { useState } from "react";

function UserForm({ addUser }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const changeState = (key, e) => {
    setUser({ ...user, [key]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({ name: "", email: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="outline-none">
      <div className="form__group field">
        <input
          type="text"
          className="form__field"
          placeholder="Name"
          value={user.name}
          onChange={(e) => changeState("name", e)}
          id="name"
          required
        />
        <label htmlFor="name" className="form__label">
          Kullanıcı Adı
        </label>
      </div>
      <div className="form__group field">
        <input
          type="email"
          value={user.email}
          onChange={(e) => changeState("email", e)}
          className="form__field"
          placeholder="Name"
          id="mail"
          required
        />
        <label htmlFor="mail" className="form__label">
          Mail Adresi
        </label>
      </div>
      <button className="btn active mt-3">Kullanıcı Ekle</button>
    </form>
  );
}
export default UserForm;
