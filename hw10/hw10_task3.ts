function withEmploymentDate(target:any, context:any):any{
    if (context.kind === 'class'){
        target.prototype.employmentDate = new Date();
    }
}

@withEmploymentDate
class Manager {
    task: string = 'Simple task'
    project: string = 'Simple project'
    constructor(){
    console.log('Initializing the Manager class')
    console.log((this as any).employmentDate.toDateString());
    }
}

const manager = new Manager();
console.log(manager);

