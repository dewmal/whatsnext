import { makeAutoObservable } from "mobx";
import moment from "moment";
import { WeekTask } from "../models/WeekTask";
import { weekTaskApi } from "../../services";

export class WeekTaskUI {
  currentTask;
  taskList;
  weekStartDate;

  constructor() {
    this.currentTask = new WeekTask();
    this.taskList = [];
    // Init Calculations
    this.loadTasks();
    this.calcWeekStartDate();
    // Observables
    makeAutoObservable(this);
  }

  loadTasks() {
    weekTaskApi.getAll().then((allTasks) => {
      console.log(allTasks);
      this.taskList.push(...allTasks);
    });
  }

  calcWeekStartDate() {
    const today = moment();
    const weekStartDateObj = today.startOf("week");
    this.weekStartDate = weekStartDateObj;
  }

  addTask(task) {
    weekTaskApi.save(task);
    this.taskList.push(task);
  }

  removeTask(task) {
    weekTaskApi.removeById(task);
    const tskIndex = this.taskList.indexOf(task);
    this.taskList.splice(tskIndex, 1);
  }

  getWeekTask() {
    return new WeekTask(this.weekStartDate.toDate());
  }
}
