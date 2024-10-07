import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { ProfileService } from '../../services/profile.service';
import { of } from 'rxjs';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let profileServiceMock: jasmine.SpyObj<ProfileService>;

  beforeEach(async () => {
    profileServiceMock = jasmine.createSpyObj('ProfileService', ['getUserProfiles']); // Change here
    await TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        { provide: ProfileService, useValue: profileServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load profiles on init', () => {
    const mockProfiles = [
      { 
        id: 1, // Make sure to include an id if your UserProfile model requires it
        name: 'John', 
        surname: 'Doe', 
        email: 'john.doe@example.com', 
        phone: '1234567890', 
        favoriteProgrammingLanguage: 'JavaScript' 
      }
    ];
    
    profileServiceMock.getUserProfiles.and.returnValue(of(mockProfiles)); // Change here
    
    component.ngOnInit();

    expect(component.userProfiles.length).toBe(1); // Change here to match the actual property name
    expect(component.userProfiles[0].name).toBe('John');
  });
});