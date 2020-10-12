import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questionsList=[];
  resultsOn:boolean = false;
  score:number = 0;
  total;
  answers= new Array(this.questionsList.length);
  constructor(private questionsService:QuestionsService) { }

  ngOnInit(): void {
    this.questionsList = this.questionsService.getQuestions();
  }
  showResult(){
    this.total = this.questionsList.length;
    this.score = 0;
    for(let i=0;i<this.answers.length;i++){
      if(this.answers[i] == this.questionsList[i].CorrectAnswer){
        this.score = this.score + 1;
      }
    }
    this.resultsOn = true;
  }
  onChange(value:String,index:number){
    this.answers[index] = value;
  }
}
