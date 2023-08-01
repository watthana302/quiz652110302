import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class LearnService  {
  quizData: Question[] = [
    {
      id: 1,
      text: 'Politics: Who is the current President/Prime Minister of Canada?',
      choices: [
        {
          id: 1,
          text: 'Justin Trudeau',
          isAnswer: true,
        },
        
      ],
    },
    {
      id: 2,
      text: 'Geography: Which river is the longest in the world?',
      choices: [
       
        {
          id: 1,
          text: 'Nile River',
          isAnswer: true,
        },
       
      ]
    },
    {
      id: 3,
      text: 'Literature: Who is the author of the play "Romeo and Juliet"?',
      choices: [
        {
          id: 1,
          text: 'William Shakespeare',
          isAnswer: true,
        },
      
        
      ],
    },
    {
      id: 4,
      text: 'Sports: In which sport would you perform a slam dunk?',
      choices: [
        
        {
          id: 1,
          text: 'Basketball',
          isAnswer: true,
        },
       
      ],
    },
    {
      id: 5,
      text: 'Entertainment: Which actor played the role of Tony Stark/Iron Man in the Marvel Cinematic Universe?',
      choices: [
       {
          id: 1,
          text: 'Robert Downey Jr.',
          isAnswer: true,
        },
        
      ],
    },
    
  ];

  constructor() { }

  getQuizData() {
    return this.quizData;
  }
}