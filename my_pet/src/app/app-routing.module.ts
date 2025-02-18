import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { Logement2Component } from './logement2/logement2.component';
import { Logement1Component } from './logement1/logement1.component';
import { LogFormComponent } from './log-form/log-form.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { SignalComponent } from './signal/signal.component';
import { ForumComponent } from './forum/forum.component';
import { PetDescAComponent } from './pet-desc-a/pet-desc-a.component'
import { QuestionComponent } from './question/question.component';
import { LogEditComponent } from './log-edit/log-edit.component';
import { PetDescRComponent } from './pet-desc-r/pet-desc-r.component'

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch:'full'},
  {path: 'main', component: MainComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'logement1', component: Logement1Component},
  {path: 'logement2/:selectedValue', component: Logement2Component},
  {path: 'log-form', component: LogFormComponent},
  {path: 'log-edit', component: LogEditComponent},
  {path: 'adoption', component: AdoptionComponent},
  {path: 'signal', component: SignalComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'pet-desc-a', component: PetDescAComponent},
  {path: 'pet-desc-r', component: PetDescRComponent},
  {path: 'question', component: QuestionComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
