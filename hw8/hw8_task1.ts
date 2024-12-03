interface Employee {name:string, profession: string, workingHoursPerDay:number};
const employee: Employee = {
    name: "Alex Brown",
    profession: "doctor",
    workingHoursPerDay: 10
};

type Premium = {isPremium:boolean, premium:number};
const premiumData: Premium = {
    isPremium: true,
    premium: 1000
};

const payPerHour:number = 32;
const workingDays:number = 14;
const experienceСoefficients:number[]= [1, 1.1, 1.2, 1.3, 1.5,];

const getSalaryInfo = (employeeData:Employee, premiumDat:Premium, payPerHour:number, workingDays:number, experienceСoefficients:number):string => {
    let salary:number;

    if (premiumData.isPremium) {
    salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceСoefficients + premiumData.premium;
    } else {
    salary = employeeData.workingHoursPerDay * payPerHour * workingDays * experienceСoefficients;
    }

    return `${employee.profession} ${employee.name} has a salary of ${salary}$ this month`;
    
};
    
const salaryInfo:string = getSalaryInfo(employee,premiumData, payPerHour, workingDays, experienceСoefficients[2]);
console.log(salaryInfo);