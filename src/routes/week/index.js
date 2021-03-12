import { h } from "preact";
import TaskAddForm from "./components/TaskAddForm";
import TaskListView from "./components/TaskListView";
// Note: `user` comes from the URL, courtesy of our router
const Weekly = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Weekly plan</h1>

      <TaskAddForm />

      <TaskListView />
    </div>
  );
};

export default Weekly;
