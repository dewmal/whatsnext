import { useContext, useEffect, useState } from "preact/hooks";
import { WeekTask } from "../../../../store/models/WeekTask";
import {globalContext} from '../../../../store/rootStore'

const TaskAddForm = () => {
  const store = useContext(globalContext);
  const { weekTaskUiStore } = store;

  const [task, setTask] = useState(new WeekTask());
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (task) {
      task.title = title;
      setTask(task);
    }
  }, [task, title]);

  return (
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Jane Doe"
          aria-label="Full name"
          onInput={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button
          class="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={
            ()=>{
              weekTaskUiStore.addTask(task);
            }
          }
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default TaskAddForm;
