import { useState } from "react";
import "./ImageLinkForm.css";

export const ImageLinkForm = ({ changeImageUrl, displayFaceBox }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.regionsList[0].regionInfo.boundingBox;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      topRow: clarifaiFace.topRow * height,
      leftCol: clarifaiFace.leftCol * width,
      bottomRow: height - clarifaiFace.bottomRow * height,
      rightCol: width - clarifaiFace.rightCol * width,
    };
  };

  const onButtonSubmit = async () => {
    console.log("Input Value:", inputValue); // Check if URL is coming
    changeImageUrl(inputValue);

    const response = await fetch("http://localhost:3001/imageurl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: inputValue }),
    });

    const data = await response.json();
    console.log(data.regionsList[0].regionInfo.boundingBox);
    displayFaceBox(calculateFaceLocation(data));
  };

  return (
    <div>
      <p className="center f3">
        This magic brain will detect faces in your pictures. Give it a try
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            value={inputValue}
            onChange={onInputChange}
          />
          <button
            onClick={onButtonSubmit}
            className="w-30 grow f4 link ph3 pv2 white dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
