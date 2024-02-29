import { Test, TestingModule } from '@nestjs/testing';
import { EnginesFactorycontroller } from './engines-factory.controller';
import { EnginesFactoryDomainService } from './engines-factory.domain.service';

describe('AppController', () => {
  let appController: EnginesFactorycontroller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EnginesFactorycontroller],
      providers: [EnginesFactoryDomainService],
    }).compile();

    appController = app.get<EnginesFactorycontroller>(EnginesFactorycontroller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
