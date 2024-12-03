;
var employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};
var premiumData = {
    isPremium: true,
    premium: 1000
};
var payPerHour = 32;
var workingDays = 14;
var experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5,];
var getSalaryInfo = function (employeeData, premiumDat, payPerHour, workingDays, experienceСoefficients) {
    var salary;
    if (premiumData.isPremium) {
        salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceСoefficients + premiumData.premium;
    }
    else {
        salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceСoefficients;
    }
    return "".concat(employee.profession, " ").concat(employee.name, " has a salary of ").concat(salary, "$ this month");
};
var salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, workingDays, experienceСoefficients[2]);
console.log(salaryInfo);
