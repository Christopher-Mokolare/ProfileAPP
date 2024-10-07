import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent }, // Default path
  { path: 'edit-profile', component: EditProfileComponent } // Path for Edit Profile
];