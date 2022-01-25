import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { ServicesAuth } from './services.Auth';

describe('ServicesService', () => {
  let service: ServicesAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
