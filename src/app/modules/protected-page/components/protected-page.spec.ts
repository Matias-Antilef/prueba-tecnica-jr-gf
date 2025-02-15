import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@/app/core/services/auth.service';
import ProtectedPageComponent from './protected-page.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

describe('ProtectedPageComponent', () => {
  let component: ProtectedPageComponent;
  let fixture: ComponentFixture<ProtectedPageComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtectedPageComponent],
      providers: [AuthService, provideHttpClient(withFetch())],
    }).compileComponents();
  });

  it('should create an instance of LoginComponent -ProtectedPageTest-', () => {
    expect(ProtectedPageComponent).toBeTruthy();
  });

  it(`should have the button "Logout" -ProtectedPageTest-`, () => {
    const fixture = TestBed.createComponent(ProtectedPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent?.trim()).toBe('Logout');
  });
});
