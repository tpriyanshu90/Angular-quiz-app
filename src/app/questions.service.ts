import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions = [
    {
      question:"JSON stands for ________________",
      Option1:"Java Standard Output Network",
      Option2:"JavaScript Object Notation",
      Option3:"JavaScript Output Name",
      Option4:"Java Source Open Network",
      CorrectAnswer:"JavaScript Object Notation",
    },
    {
      question:"Which of the following is not a type in JSON?",
      Option1:"date",
      Option2:"object",
      Option3:"array",
      Option4:"string",
      CorrectAnswer:"date",
    },
    {
      question:"Inside which HTML element do we put the JavaScript code?",
      Option1:"javascript",
      Option2:"js",
      Option3:"script",
      Option4:"scripting",
      CorrectAnswer:"script",
    }
  ];
  constructor() { }
  getQuestions(){
    return this.questions;
  }
}
