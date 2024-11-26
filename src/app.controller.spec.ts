import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamList } from './shared/exam.list';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getExamList', () => {
    it('should return the Exam List', () => {
      const res = {
        json: jest.fn().mockReturnValue(ExamList.getAll()),
      };
      expect(appController.getExamList(res as any)).toEqual(ExamList.getAll());
      expect(res.json).toHaveBeenCalledWith(ExamList.getAll());
    });
  });

  describe('getTwoSumTwo', () => {
    it('should return an array with two values that sum to the target', () => {
      const body = {
        nums: ExamList.getInput(ExamList.TwoSumTwo)?.numbers || [],
        target: ExamList.getInput(ExamList.TwoSumTwo)?.target || 0,
      };
      const res = {
        json: jest.fn().mockReturnValue({'nums': [11, 7]}),
      };
      expect(appController.getTwoSumTwo(body.nums, body.target, res as any)).toEqual({'nums': [11, 7]});
      expect(res.json).toHaveBeenCalledWith({'nums': [11, 7]});
    });
    it('should return an array with two values that sum to the target (multiple)', () => {
      const body = {
        nums: [2, 5, 4, 5, 12, 5, 40],
        target: 10,
      };
      const res = {
        json: jest.fn().mockReturnValue({'nums': [5, 5]}),
      };
      expect(appController.getTwoSumTwo(body.nums, body.target, res as any)).toEqual({'nums': [5, 5]});
      expect(res.json).toHaveBeenCalledWith({'nums': [5, 5]});
    });
  });

  describe('getHideCCNumber', () => {
    it('should return masked credit card number', () => {
      const body = {
        ccNum: '8976543276544321',
      };
      const res = {
        json: jest.fn().mockReturnValue({'ccNum': '************4321'}),
      };
      expect(appController.getHideCCNumber(body.ccNum, res as any)).toEqual({'ccNum': '************4321'});
      expect(res.json).toHaveBeenCalledWith({'ccNum': '************4321'});
    });
    it('should return masked credit card number (stripped)', () => {
      const body = {
        ccNum: '1234 5678 9012 3456',
      };
      const res = {
        json: jest.fn().mockReturnValue({'ccNum': '************3456'}),
      };
      expect(appController.getHideCCNumber(body.ccNum, res as any)).toEqual({'ccNum': '************3456'});
      expect(res.json).toHaveBeenCalledWith({'ccNum': '************3456'});
    });
    it('should return error credit card number (invalid)', () => {
      const body = {
        ccNum: '1234 5678 9012 345',
      };
      const res = {
        json: jest.fn().mockReturnValue({'ccNum': 'Invalid credit card number'}),
      };
      expect(appController.getHideCCNumber(body.ccNum, res as any)).toEqual({'ccNum': 'Invalid credit card number'});
      expect(res.json).toHaveBeenCalledWith({'ccNum': 'Invalid credit card number'});
    });
  });

  describe('getMoveZeroes', () => {
    it('should return reordered array with zeroes at the end', () => {
      const body = {
        nums: ExamList.getInput(ExamList.MoveZeroes)?.numbers || [],
      };
      const res = {
        json: jest.fn().mockReturnValue('{"nums": [1, 3, 12, 0, 0]}'),
      };
      expect(appController.getMoveZeroes(body.nums, res as any)).toEqual('{"nums": [1, 3, 12, 0, 0]}');
      expect(res.json).toHaveBeenCalledWith({"nums": [1, 3, 12, 0, 0]});
    });
  });
});
