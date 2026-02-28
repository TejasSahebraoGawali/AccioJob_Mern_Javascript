import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./App.css";
import Box from "./components/Box/box";

const App = () => {
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
      <Footer></Footer>
    </div>
  );
};

export default App;
