export class WeekTask {
  startDate;
  endDate;
  title;
  description;
  isDone = false;

  constructor(startDate) {
    this.startDate = startDate;
  }

  getId() {
    return `${this.startDate.getTime()}_${new Date().getTime()}`;
  }
}
