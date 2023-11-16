/* Your Code Here */
function createEmployeeRecord(array) {
    const employeeRecord = [];

    employeeRecord.firstName = array[0];
    employeeRecord.familyName = array[1];
    employeeRecord.title = array[2];
    employeeRecord.payPerHour = array[3];
    employeeRecord.timeInEvents = [];
    employeeRecord.timeOutEvents = [];

    return employeeRecord;
}

function createEmployeeRecords(newArray) {
    const employeeRecords = newArray.map((record) => {
        return createEmployeeRecord(record);
    });

    return employeeRecords;
}

function createTimeInEvent(time) {
    let [date, hour] = time.split(" ");
    let [year, month, day] = date.split ("-");

    let timeStamp = {
        type: "TimeIn",
        hour: parseInt(hour),
        date: `${year}-${month}-${day}`
};

    this.timeInEvents.push(timeStamp)
    
    return this;
}

function createTimeOutEvent(time) {
    let [date, hour] = time.split(" ");
    let [year, month, day] = date.split("-");

    let timeStamp = {
        type: "TimeOut",
        hour: parseInt(hour),
        date: `${year}-${month}-${day}`
    };

    this.timeOutEvents.push(timeStamp)

    return this;
}

function hoursWorkedOnDate(date) {

    //We use the find method on the timeInEvents/timeOutEvents array of the employee record to locate the specific timeInEvent object that matches the given date.
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
    //We extract the hour from both the timeInEvent and timeOutEvent objects and convert them to integers using parseInt.
    const timeInHour = parseInt(timeInEvent.hour, 10);
    const timeOutHour = parseInt(timeOutEvent.hour, 10);

    let hoursWorked;
  
    if (timeOutHour >= timeInHour) {
        hoursWorked = timeOutHour - timeInHour;
    } else {
        hoursWorked = 24 - timeInHour + timeOutHour;
    }
  
    return hoursWorked;
  }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

