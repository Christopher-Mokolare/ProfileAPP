import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProfileService } from '../../services/profile.service';
import { UserProfile } from '../../models/profile.model'; 

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userProfiles: UserProfile[] = []; 
  selectedProfile: UserProfile | undefined; 

  constructor(private profileService: ProfileService, private router: Router) {} 

  ngOnInit() {
    this.loadUserProfiles(); 
  }

  loadUserProfiles() {
    this.profileService.getUserProfiles().subscribe(profiles => {
      this.userProfiles = profiles; // Store fetched profiles
    });
  }

  editProfile(profile: UserProfile) {
    this.router.navigate(['/edit-profile', profile.id]); // Navigate to edit profile using ID
  }

  saveProfile(editedProfile: UserProfile) {
    this.profileService.updateUserProfile(editedProfile).subscribe(() => {
      this.loadUserProfiles(); // Reload profiles after saving
      this.selectedProfile = undefined; // Clear selected profile
    });
  }

  deleteProfile(id: number) {
    this.profileService.deleteUserProfile(id).subscribe(() => {
      this.loadUserProfiles(); // Reload profiles after deletion
    });
  }
}