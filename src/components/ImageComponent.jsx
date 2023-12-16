import PropTypes from "prop-types";
import { useState } from "react";
import altAvatar from "../assets/altAvatar.png";
import { CircularProgress, Box } from "@mui/material";

function ImageComponent({ src, alt }) {
  // let imgRef = useRef();
  let [img] = useState(src);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  return (
    <>
      <img
        src={error ? altAvatar : img}
        height="100%"
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
      />
      {!loaded && (
        <Box>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default ImageComponent;
