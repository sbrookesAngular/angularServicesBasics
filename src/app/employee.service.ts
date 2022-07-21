import { Injectable } from '@angular/core';

//this injects dependencies into dependencies, "careerGoals": ""
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  //returns array to be passed 
  /*
   you have to "register" it to the components; to do the broadest scope, 
   "register it in app.module.ts" in providers: [],
   */
  getEmployees(){

    return [

      {"id": 0, "name": "Andy", "age":30, "startDate": "01/01/2021", "position": "Front End Developer", "careerGoals": "Learn Angular"},
      {"id": 1, "name": "Bandy", "age":31, "startDate": "11/11/2011", "position": "Back End Developer", "careerGoals": "Learn PostgreSQL"},
      {"id": 2, "name": "Candy", "age":32, "startDate": "03/23/2002", "position": "Scrum Master", "careerGoals": "Learn AzureDevOps"},
      {"id": 3, "name": "Kandy", "age":37, "startDate": "09/25/2015", "position": "Project Lead", "careerGoals": "Become CTO"},
      {"id": 4, "name": "Mandy", "age":38, "startDate": "08/08/2008", "position": "Quality Assurance", "careerGoals": "Become a developer"}
  
    ];


  }

  constructor() { }

}