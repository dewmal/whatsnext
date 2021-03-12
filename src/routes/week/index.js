import { h } from "preact";
// Note: `user` comes from the URL, courtesy of our router
const Weekly = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Weekly plan</h1>

      <form class="w-full max-w-sm">
        <div class="flex items-center border-b border-teal-500 py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Jane Doe"
            aria-label="Full name"
          />
          <button
            class="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Weekly;
