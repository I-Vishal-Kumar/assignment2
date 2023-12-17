import PropTypes from "prop-types";
import altAvatar from "../assets/altAvatar.png";
import AvatarImage from "./AvatarImage";

const UserCard = ({ data, activeUser }) => {
  return (
    <div className="h-[100%]">
      <div className="my-[1rem] bg-[#6abcff] rounded-md">
        <h2 className="uppercase py-[1rem] text-center">USERS DETAILS</h2>
      </div>
      <div className="md:h-[30rem] h-20rem flex justify-center flex-col items-center py-[1rem]">
        {/* here i have to map and get out the data */}
        {/* avatar box */}
        <div className="h-[8rem] overflow-hidden aspect-square rounded-full bg-green-400">
          <AvatarImage
            src={(activeUser !== -1 && data[activeUser]?.avatar) || altAvatar}
            alt={"avatar"}
          />
        </div>
        <h4>
          {(activeUser !== -1 && data[activeUser]?.profile?.username) ||
            "not available"}
        </h4>
        {/* user details */}
        <div className="py-[1rem] flex flex-col w-[80%] justify-center">
          <p className="min-h-[3rem] p-[0.5rem] w-full rounded-md bg-[#d8d7d7] text-black">
            {(activeUser !== -1 && data[activeUser]?.Bio) ||
              "Bio not available"}
          </p>
          <div>
            <div className="mt-[0.5rem]">
              <label className=" font-semibold capitalize">full Name</label>
              <p className="py-[0.5rem] text-black rounded-md bg-[#d8d7d7] px-[1rem]">
                {(activeUser !== -1 &&
                  data[activeUser]?.profile?.firstName +
                    " " +
                    data[activeUser]?.profile?.lastName) ||
                  "name not available"}
              </p>
            </div>
            <div className="mt-[0.5rem]">
              <label className=" font-semibold capitalize">job title</label>
              <p className="py-[0.5rem] text-black rounded-md bg-[#d8d7d7] px-[1rem]">
                {(activeUser !== -1 && data[activeUser]?.jobTitle) ||
                  "job title not available"}
              </p>
            </div>
            <div className="mt-[0.5rem]">
              <label className=" font-semibold capitalize">email</label>
              <p className="py-[0.5rem] text-black rounded-md bg-[#d8d7d7] px-[1rem]">
                {(activeUser !== -1 && data[activeUser]?.profile?.email) ||
                  "@email not available"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  data: PropTypes.array,
  activeUser: PropTypes.number,
};

export default UserCard;
