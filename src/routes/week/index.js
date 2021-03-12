import { useState, useEffect } from "preact/hooks";
import TaskAddForm from "./components/TaskAddForm";
import TaskListView from "./components/TaskListView";
import moment from "moment";

const WeekStartDateComponent = () => {
  const [weekStartDate, setWeekStartDate] = useState();
  useEffect(() => {
    const today = moment();
    const weekStartDateObj = today.startOf("week");
    setWeekStartDate(weekStartDateObj.format("YYYY-DD-MM"));
  }, []);
  return <>{weekStartDate}</>;
};

const Weekly = ({ user }) => {
  console.log(user);
  return (
    <div>
      <h1>Weekly plan</h1>
      <WeekStartDateComponent />
      <TaskAddForm />
      <TaskListView />
    </div>
  );
};

export default Weekly;
