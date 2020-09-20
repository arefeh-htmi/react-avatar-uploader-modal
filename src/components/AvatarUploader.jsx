import React, { Component } from "react";
import $ from "jquery";
import { printMessage } from "../services/Errors";
// import { printSuccessMessage } from "../services/Success";
import ProfileIMG from "./utils/ProfileIMG";
import MyIcon from "./utils/MyIcon";
import "./uploader.scss";
class AvatarUploader extends Component {
  state = {
    imagePreviewUrl: "",
    fileName: "",
    file: null
  };
  async docChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    if (!file) {
      printMessage("Please select an image to upload.");
      return false;
    }
    if (!file.name.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)) {
      printMessage(
        "Please select an image to upload this type is not supported"
      );
      return false;
    }
    if (file.size > 1e6) {
      //less than 1Mb
      printMessage("File Size Not Valid");
      return false;
    } else {
      await this.setState({ imageValid: true });

      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          fileName: file.name,
          file: file,
          imagePreviewUrl: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  }
  async handleUploadImage(e) {
    e.preventDefault();
  }
  render() {
    const { imagePreviewUrl } = this.state;
    let imagePreview = null;

    if (imagePreviewUrl) {
      imagePreview = (
        <>
          <ProfileIMG previewUrl="pre" img={imagePreviewUrl} className=" " />
        </>
      );
    } else {
      imagePreview = (
        <>
          <div className="uploadIcon">
            <MyIcon className="cloud_upload fa-upload" />
          </div>
        </>
      );
    }
    return (
      <>
        <div className="modalContainer EventUploaderPage hideUploadAvatar">
          <div className={`modalData`}>
            {/* <div className="full-width"> */}
            <MyIcon
              className="fa-times closeIcon"
              onClick={(e) => {
                e.preventDefault();
              }}
            />
            <form className="baseForm">
              <div className="imagepreview">{imagePreview}</div>
              <div className="uploadInputGroup">
                <div className="form-group">
                  <label className="form-label" htmlFor="avatar">
                    File input
                  </label>
                  <label htmlFor="avatar" className="input-file">
                    <div className="button secondary">
                      <input
                        type="file"
                        name="avatar"
                        id="avatar"
                        onChange={(e) => this.docChange(e)}
                      />
                      Browse
                    </div>
                    <input
                      type="text"
                      readOnly=""
                      value={this.state.fileName}
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={(e) => this.handleUploadImage(e)}
                  disabled={!this.state.imageValid}
                >
                  upload
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default AvatarUploader;
