import axios from "axios";
async function getData() {
  let url = `${import.meta.env.VITE_BASE_URL}`;
  try {
    let res = await axios.get(url);
    console.log(res.data);
    return res?.data || null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

export default getData;
