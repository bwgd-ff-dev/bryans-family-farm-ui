import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [MatToolbarModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an iframe for Google Maps', () => {
    const iframe = fixture.debugElement.query(By.css('iframe'));
    expect(iframe).toBeTruthy();
    expect(iframe.attributes['src']).toContain('google.com/maps');
  });

  it('should display the address', () => {
    const address = fixture.debugElement.query(By.css('.address')).nativeElement;
    expect(address.textContent).toContain('123 Market St');
    expect(address.textContent).toContain('San Francisco');
  });

  it('should display contact information', () => {
    const contact = fixture.debugElement.query(By.css('.footer-right')).nativeElement;
    expect(contact.textContent).toContain('Email');
    expect(contact.textContent).toContain('Phone');
    expect(contact.textContent).toContain('Hours');
  });
});
