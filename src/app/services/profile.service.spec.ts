import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:5056/api/userprofiles';

  constructor(private http: HttpClient) {}

  // Get all profiles
  getProfiles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a single profile by ID
  getProfile(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Update a profile
  updateProfile(id: number, profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, profileData);
  }

  // Create a new profile
  createProfile(profileData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, profileData);
  }
}