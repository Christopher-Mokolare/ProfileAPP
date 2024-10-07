import { Injectable } from '@angular/core'; 
import { Observable, of } from 'rxjs';
import { UserProfile } from './models/profile.model'; 

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // Mock list of profiles
  private profiles: UserProfile[] = [ 
    {
      id: 1, 
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      favoriteProgrammingLanguage: 'JavaScript'
    }
  ];

  constructor() { }

  getProfiles(): Observable<UserProfile[]> {
    return of(this.profiles); 
  }

  getUserProfile() {
    return { ...this.profiles[0] }; 
  }

  updateUserProfile(updatedProfile: UserProfile) { 
    this.profiles[0] = { ...updatedProfile }; 
  }
}