import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire.component';
import { MainComponent } from './main/main.component';
import { NewQuestionnaireComponent } from './new-questionnaire/new-questionnaire.component';
import { QuizComponent } from './quiz/quiz.component';


const routes: Routes = [
  {
    path: '',
    component: QuestionnaireComponent,
    children: [
      {
      path: '',
      component: MainComponent
      },
      {
        path: 'novo',
        component: NewQuestionnaireComponent,
      },
      {
        path: 'quiz',
        component: QuizComponent
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnaireRoutingModule { }
