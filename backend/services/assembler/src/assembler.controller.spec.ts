import { Test, TestingModule } from '@nestjs/testing';
import { AssemblerController } from './assembler.controller';
import { AssemblerDomainService } from './assembler.domain.service';

describe('AppController', () => {
  let appController: AssemblerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AssemblerController],
      providers: [AssemblerDomainService],
    }).compile();

    appController = app.get<AssemblerController>(AssemblerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
