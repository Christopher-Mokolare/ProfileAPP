import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'; 
import { UserProfile } from '../../models/profile.model'; 
import { ProfileService } from '../../services/profile.service'; 
import { ActivatedRoute } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  imports: [FormsModule]
})
export class EditProfileComponent implements OnInit {
  @Input() userProfile!: UserProfile; 
  @Output() profileUpdated = new EventEmitter<UserProfile>();
  @Output() cancelEditing = new EventEmitter<void>(); 

  editedProfile: UserProfile = { 
    id: 0, 
    name: '', 
    surname: '', 
    email: '', 
    phone: '', 
    favoriteProgrammingLanguage: '' 
  };

  constructor(
    private profileService: ProfileService, 
    private route: ActivatedRoute 
  ) {}

  ngOnInit() {
    if (this.userProfile) {
      this.editedProfile = { ...this.userProfile }; // Initialize with the input profile
    }
  }

  saveProfile() {
    this.profileUpdated.emit(this.editedProfile);
    alert('Profile saved successfully!'); 
  }

  cancel() {
    this.cancelEditing.emit();
  }
}