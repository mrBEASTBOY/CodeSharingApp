import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { SnippetEditorComponent } from './components/snippet-editor/snippet-editor.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, SnippetEditorComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, MonacoEditorModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
