import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticleContainerComponent } from './article-container/article-container.component';
import { MetadataContainerComponent } from './metadata-container/metadata-container.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, ArticleContainerComponent, MetadataContainerComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
