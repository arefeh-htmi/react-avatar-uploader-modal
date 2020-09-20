import React from "react";
import MyIcon from "./MyIcon";

const ProfileIMG = (props) => {
  let previewIMG = props.img.startsWith("data:");
  return (
    <>
      <div className={`imageContainer ${props.className}`}>
        {props.img !== "" ? (
          <div
            className="userAvatar"
            style={{
              backgroundImage: `url(${previewIMG ? props.img : "" + props.img})`
            }}
          ></div>
        ) : (
          <MyIcon className="fa-user" />
        )}
      </div>
    </>
  );
};

export default ProfileIMG;
