import React, { useState } from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./App.css";
import Box from "./components/Box/box";
import Counter from "./components/counter";

const App = () => {
  const [name, setName] = useState("Tejas");
  return (
    <div id="root">
      <Header></Header>
      <section id="content">
        <Box size="small" style={{ backgroundColor: "red" }}>
          Box 1
        </Box>

        <Box
          size="medium"
          style={{
            backgroundColor: "royalblue",
            fontWeight: 600,
            fontStyle: "normal",
          }}
        >
          Box 2
        </Box>

        <Box
          size="large"
          style={{ backgroundColor: "yellow" }}
          children={"Box 3"}
        ></Box>
      </section>
      <Counter></Counter>
      <input type="text" value={name} 
      onChange={(event) => {
        setName(event.target.value);
      }} />
      <label htmlFor="username">{name}</label>
      <Footer></Footer>
    </div>
  );
};

export default App;
