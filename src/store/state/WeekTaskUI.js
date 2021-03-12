import { makeAutoObservable } from "mobx";
import moment from "moment";
import { WeekTask } from "../models/WeekTask";

export class WeekTaskUI {
  currentTask;
  taskList;
  weekStartDate;

  constructor() {
    this.currentTask = new WeekTask();
    this.taskList = [];
    // Init Calculations
    this.calcWeekStartDate();
    // Observables
    makeAutoObservable(this);
  }

  calcWeekStartDate() {
    const today = moment();
    const weekStartDateObj = today.startOf("week");
    this.weekStartDate = weekStartDateObj;
  }

  addTask(task) {
    this.taskList.push(task);
  }

  removeTask(task) {
    const tskIndex = this.taskList.indexOf(task);
    this.taskList.slice(tskIndex);
  }
}
