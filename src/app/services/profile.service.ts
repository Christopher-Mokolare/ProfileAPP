import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:5056/api/userprofiles'; 

  constructor(private http: HttpClient) {}
  // Create a new user profile
  createUserProfile(userProfile: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.apiUrl, userProfile);
  }
  // Fetch a single user profile by ID
  getUserProfile(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${id}`);
  }

  // Fetch all user profiles
  getUserProfiles(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.apiUrl); // Ensure the endpoint returns an array of profiles
  }

  // Update a user profile
  updateUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}/${profile.id}`, profile);
  }

  // Delete a user profile
  deleteUserProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}