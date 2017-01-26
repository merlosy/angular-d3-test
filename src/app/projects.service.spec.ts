/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

/**
 * @see https://kendaleiv.com/angular-2-mockbackend-service-testing-template-using-testbed/
 */
describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsService, 
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeDefined();
  }));

  const mockResponse = [{}];
  it('should parse response', async(inject(
    [ProjectsService, MockBackend],(service, mockBackend) =>{

      mockBackend.connections.subscribe(conn=>{
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(mockResponse)
        })))
      });
      const result = service.getProjects();

      result.subscribe(res => {
        expect(res).toEqual([{}]);
      });

    }
  )))



});
