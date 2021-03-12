const TastListItemView = () => {
  return (
    <>
      <li>
        <div className="flex items-center">
          <div className="h-10 rounded-full mr-4">
            Lorem ipsum dolor sit amet
          </div>
          <div className="h-10 rounded-full mr-4">
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </li>
    </>
  );
};

const TaskListView = () => {
  return (
    <>
      <ol class="list-decimal">
        <TastListItemView />
        <TastListItemView />
        <TastListItemView />
      </ol>
    </>
  );
};

export default TaskListView;
