import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'game', loadChildren: './pages/game/game.module#GamePageModule' },
  { path: 'score', loadChildren: './pages/score/score.module#ScorePageModule' },
  { path: 'answer/:bool', loadChildren: './pages/answer/answer.module#AnswerPageModule' },
  { path: 'result', loadChildren: './pages/result/result.module#ResultPageModule' },
  { path: 'training', loadChildren: './pages/training/training.module#TrainingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
