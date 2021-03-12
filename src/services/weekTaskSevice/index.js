import PouchDb from "pouchdb-browser";

const db = new PouchDb("whatsnext-db");

export const save = (task) => {
  const taskObj = {
    _id: task.getId(),
    title: task.title,
  };
  db.put(taskObj, (err, result) => {
    console.log(err, result);
  });
};

export const removeById = (task) => {
    db.remove(task);
};

export const getAll = async () => {
  const options = {
    include_docs: true,
  };
  const result = await db.allDocs(options);
  if (result) {
    const { rows } = result;
    return rows.map(({ doc }) => doc);
  }
  return [];
};
