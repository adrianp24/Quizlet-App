import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { QuestionComponent } from './components/question/question.component';
import { FormsModule } from '@angular/forms';
import { CreateTestPageComponent } from './components/create-test-page/create-test-page.component';
import { TakeTestComponent } from './components/test-list/take-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    QuestionComponent,
    CreateTestPageComponent,
    TakeTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
