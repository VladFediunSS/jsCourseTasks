class Student {
    constructor(fullName, direction){
        this._fullName = fullName;
        this._direction = direction;
    }

    showFullName(){
        return this._fullName;
    }

    nameIncludes(data){
        return this.showFullName().includes(data);
    }

    static studentBuilder(){
        return new Student('Ihor Kohut', 'qc');
    }

    get direction(){
        return this._direction;
    }

    set direction(value) {
        this._direction = value;
        return;
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1);
console.log(stud2);
console.log(stud3);
console.log(stud1.nameIncludes('Ivan')); // true
console.log(stud1.nameIncludes('Denysenko')); // false
