import { Suspense, lazy, useEffect, useState } from "react";
import getData from "./hooks/getData";
import { toast } from "react-toastify";

const UserCard = lazy(() => import("./components/UserCard"));
const UserList = lazy(() => import("./components/UserList"));

function App() {
  function notify(message) {
    updateisLoading(false);
    return toast.warn(message);
  }
  let [activeUser, updateActiveUser] = useState(-1);
  let [data, updateData] = useState(null);
  let [isLoading, updateisLoading] = useState(false);

  useEffect(() => {
    updateisLoading(true);
    async function getUserData() {
      let data = await getData();
      if (!data) return notify("something went wrong");
      updateData(data);
      updateisLoading(false);
    }
    getUserData();
  }, []);

  return (
    <div className="flex md:flex-row flex-col p-[1rem] md:p-[5rem] gap-x-[1.5rem]">
      <section className="md:w-[50%] w-[100%]">
        <Suspense fallback={<p>loading</p>}>
          <UserList
            data={data}
            updateActiveUser={updateActiveUser}
            activeUser={activeUser}
            isLoading={isLoading}
          />
        </Suspense>
      </section>
      <section className="md:w-[50%] md:mt-0 mt-[3rem] w-[100%]">
        <Suspense fallback={<p>loading</p>}>
          <UserCard data={data} activeUser={activeUser} isLoading={isLoading} />
        </Suspense>
      </section>
    </div>
  );
}

export default App;
