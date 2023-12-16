import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { CircularProgress, Box } from "@mui/material";
import ImageComponent from "./ImageComponent";
import altAvatar from "../assets/altAvatar.png";
const UserList = ({ data, isLoading, updateActiveUser, activeUser }) => {
  let userListBox = useRef();
  let [slice_length, update_len] = useState({
    start: 0,
    end: data?.length || 0,
  });

  useEffect(() => {
    let end_value = parseInt(
      (data?.length / 100) * 10 < 10 ? data?.length : (data?.length / 100) * 10
    );
    update_len({
      end: end_value,
      start: 0,
    });
  }, [data]);

  useEffect(() => {
    let box = userListBox.current;
    function handleScroll() {
      if (box.clientHeight + box.scrollTop >= box.scrollHeight - 10) {
        let update_length =
          parseInt(slice_length.end) + 10 > data?.length
            ? Math.abs(parseInt(data?.length - slice_length.end))
            : 10;

        update_len((prev) => {
          return { ...prev, end: prev.end + update_length };
        });
      }
    }
    box.addEventListener("scroll", handleScroll);
    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, [data, slice_length.end]);

  return (
    <>
      <div className="my-[1rem] bg-[#6abcff] rounded-md">
        <h2 className="uppercase py-[1rem] text-center">USERS LIST</h2>
      </div>
      {/* user card */}
      <div
        ref={userListBox}
        className="md:h-[30rem] h-[20rem] min-h-[3rem] overflow-y-auto"
      >
        {data?.slice(0, slice_length.end || 0).map((item, idx) => (
          <div
            onClick={() => updateActiveUser(idx)}
            key={item?.createdAt}
            className={
              (activeUser === idx
                ? " bg-[#c1c0c0] border-2 border-dashed border-blue-600 "
                : "") +
              "flex mt-[0.5rem] w-full cursor-pointer rounded-sm py-[0.25rem] items-center px-[0.25rem]  bg-[#ECECEC] hover:bg-[#d8d7d7]"
            }
          >
            <div className="w-[10%] overflow-hidden aspect-square rounded-full">
              <ImageComponent src={item?.avatar || altAvatar} alt="avatar" />
            </div>
            <h4 className="mx-[0.5rem] text-black">
              {item?.profile?.username || "not available"}
            </h4>
          </div>
        ))}
        {isLoading && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        )}
      </div>
    </>
  );
};

UserList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  updateActiveUser: PropTypes.func,
  activeUser: PropTypes.number,
};
export default UserList;
