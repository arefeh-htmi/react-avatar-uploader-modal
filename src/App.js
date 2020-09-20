import React from "react";
import Uploader from "./components/AvatarUploader";

import "./styles/styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="err_box err_box_hidden" />
      <div className="success_box success_box_hidden" />
      <Uploader />
    </div>
  );
}
