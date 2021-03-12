import { useState, useEffect, useContext } from "preact/hooks";
import TaskAddForm from "./components/TaskAddForm";
import TaskListView from "./components/TaskListView";
import { observer } from "mobx-react-lite";
import { globalContext } from "../../store/rootStore";

const WeekStartDateComponent = ({ store }) => {
  const [weekStartDate, setWeekStartDate] = useState();
  useEffect(() => {
    setWeekStartDate(store.weekStartDate.format("YYYY-DD-MM"));
  }, [store]);
  return <>{weekStartDate}</>;
};

const Weekly = observer(({ user }) => {
  const store = useContext(globalContext);
  const { weekTaskUiStore } = store;
  console.log(user);
  return (
    <div>
      <h1>Weekly plan</h1>
      <WeekStartDateComponent store={weekTaskUiStore} />
      <TaskAddForm />
      <TaskListView />
    </div>
  );
});

export default Weekly;
