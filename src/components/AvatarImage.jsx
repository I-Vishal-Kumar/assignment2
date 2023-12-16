import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import altAvatar from "../assets/altAvatar.png";
import { CircularProgress, Box } from "@mui/material";

function AvatarImage({ src, alt }) {
  let [img, updateImg] = useState(src);
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    updateImg(src);
    setError(false);
    setLoaded(false);
  }, [src]);
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
        style={{ display: loaded ? "block" : "none" }}
      />
      {!loaded && (
        <Box className="h-full w-full flex justify-center items-center">
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

AvatarImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default AvatarImage;
