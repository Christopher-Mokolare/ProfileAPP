import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserProfile } from './models/profile.model';
import { ProfileService } from './services/profile.service';
import { Title } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, EditProfileComponent] 
})
export class AppComponent implements OnInit {
  userProfile: UserProfile | null = null; 
  isEditing = false;

  constructor(private profileService: ProfileService, private titleService: Title) {}  // Inject Title service

  ngOnInit() {
    const userId = 1; 
    this.profileService.getUserProfile(userId).subscribe(
      profile => {
        console.log('Fetched profile:', profile);
        this.userProfile = profile; 
        this.titleService.setTitle('Welcome to My BotsZA CRUD Profile');  
      },
      error => {
        console.error('Error fetching user profile:', error);
        this.userProfile = null; 
      }
    );
  }

  editProfile() {
    this.isEditing = true;
    this.titleService.setTitle('Edit Profile');  
  }

  saveProfile(updatedProfile: UserProfile) {
    this.profileService.updateUserProfile(updatedProfile).subscribe(() => {
      this.userProfile = updatedProfile;
      this.isEditing = false;
      this.titleService.setTitle('Welcome to My BotsZA CRUD Profile'); 
    });
  }

  cancelEdit() {
    this.isEditing = false;
    this.titleService.setTitle('Welcome to My BotsZA CRUD Profile'); 
  }
}