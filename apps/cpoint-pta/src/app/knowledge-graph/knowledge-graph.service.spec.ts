import { TestBed } from '@angular/core/testing';

import { KnowledgeGraphService } from './knowledge-graph.service';
import { GraphQLModule } from '../graphql.module';
import { HttpClientModule } from '@angular/common/http';

describe('KnowledgeGraphService', () => {
  let service: KnowledgeGraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        GraphQLModule]
    });
    service = TestBed.inject(KnowledgeGraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve nodes and links from graphql', async () => {
    const result = await service.getNodeRelationsByIdentifier('DOID:4606');    
    expect(result.nodes.length).toBeGreaterThan(0);
  })
});
