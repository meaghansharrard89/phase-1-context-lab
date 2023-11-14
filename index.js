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
    let record = time.split(/[ :-]/);
    let timeStamp = []
    timeStamp.type = "TimeIn";
    timeStamp.hour = record[3];
    timeStamp.date = record.join("-");
    return timeStamp;
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

