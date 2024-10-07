import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component'; 
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    WelcomeComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    EditProfileComponent,
    RouterModule,
    RouterModule.forRoot([])
  ],
  providers: [ProfileService],
  schemas: []
})
export class AppModule { }