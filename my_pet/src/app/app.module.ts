import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Logement1Component } from './logement1/logement1.component';
import { Logement2Component } from './logement2/logement2.component';
import { LogFormComponent } from './log-form/log-form.component';
import { AdoptionComponent } from './adoption/adoption.component';
import { SignalComponent } from './signal/signal.component';
import { ForumComponent } from './forum/forum.component';
import { PetDescAComponent } from './pet-desc-a/pet-desc-a.component';
import { QuestionComponent } from './question/question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogEditComponent } from './log-edit/log-edit.component';
import { PetDescRComponent } from './pet-desc-r/pet-desc-r.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    Logement1Component,
    Logement2Component,
    LogFormComponent,
    AdoptionComponent,
    SignalComponent,
    ForumComponent,
    PetDescAComponent,
    QuestionComponent,
    LogEditComponent,
    PetDescRComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
