import { TestBed } from '@angular/core/testing';

import { taskService } from './task-service.service';

describe('TaskServiceService', () => {
  let service: taskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(taskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
