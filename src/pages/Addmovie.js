import React, { useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

const Addmovie = () => {
  const [name, setName] = useState("");
  const [actor, setActor] = useState("");
  const [id, setId] = useState("");
  const [movie, setMovie] = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovie((premovie) => [...premovie, { name: name, actor: actor, id: id }]);
    setActor("");
    setId("");
    setName("");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", margin: "30px 40%" }}
    >
      <form onSubmit={handleSubmit}>
        <input
          style={{ fontSize: "30px" }}
          type="text"
          placeholder="Enter movie "
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <br />
        <br />
        <input
          style={{ fontSize: "30px" }}
          type="text"
          placeholder="Enter Actor "
          value={actor}
          onChange={(e) => setActor(e.target.value)}
          name="actor"
        />
        <br />
        <input
          style={{ fontSize: "30px", margin: "10px 0px" }}
          placeholder="Enter id"
          type="number"
          name="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <button
          style={{ margin: "10px 0px", padding: "6px", fontSize: "20px" }}
        >
          {" "}
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addmovie;
