import { TestBed, inject } from '@angular/core/testing';

import { AppStateService } from './app-state.service';

describe('AppStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppStateService]
    });
  });

  it('should be created', inject([AppStateService], (service: AppStateService) => {
    expect(service).toBeTruthy();

    it('should prevent set state directly', () => {
      expect(function(){ service.state = 1; }).toThrow(new Error('do not mutate the `.state` directly'));
    });

    it('should get a state domain', () => {
      service.set('prop', 'value');
      expect(service.get('prop')).toEqual('value');
    });
  }));
});
