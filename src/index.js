import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => <div style={styles} />;

render(<App />, document.getElementById("root"));
