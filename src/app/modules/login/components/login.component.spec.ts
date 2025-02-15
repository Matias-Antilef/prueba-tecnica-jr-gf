import { TestBed } from '@angular/core/testing';
import LoginComponent from './login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AuthService } from '@/app/core/services/auth.service';

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [AuthService, provideHttpClient(withFetch())],
    }).compileComponents();
  });
  it('should create an instance of LoginComponent', () => {
    expect(LoginComponent).toBeTruthy();
  });

  it('should have two inputs', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const inputs = compiled.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  });

  it(`should have the "Ingresa sesión" in the card`, () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toEqual('Login');
  });
});
