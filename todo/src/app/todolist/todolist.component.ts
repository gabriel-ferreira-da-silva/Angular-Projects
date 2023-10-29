import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit{
  
  taskArray = [{taskName: 'Brush teeth', isCompleted: false}];

  ngOnInit(): void{

  }
  onSubmit(form: NgForm){
    console.log(form);
    this.taskArray.push({taskName: form.controls['task'].value, isCompleted: false})
    form.reset();
  }

  onDelete(i : number){
    console.log(i)
    this.taskArray.splice(i,1);
  }
  onCheck(){
    console.log(this.taskArray);
  }
}
