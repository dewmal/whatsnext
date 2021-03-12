import { h } from "preact";
// Note: `user` comes from the URL, courtesy of our router
const Weekly = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Weekly plan</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default Weekly;
