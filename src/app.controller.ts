import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { Response as Res } from 'express';
import { AppService } from './app.service';
import { ExamList } from './shared/exam.list';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getExamList(@Response() res: Res): Res {
    return res.json(ExamList.getAll());
  }

  @Post(ExamList.TwoSumTwo)
  getTwoSumTwo(
    @Body('nums') nums: number[],
    @Body('target') target: number,
    @Response() res: Res
  ): Res {
    return res.json({
      'nums': this.appService.twoSumTwo(nums || [], target || 0)
    });
  }

  @Post(ExamList.HideCCNumber)
  getHideCCNumber(
    @Body('ccNum') ccNum: string,
    @Response() res: Res
  ): Res {
    return res.json({
      'ccNum': this.appService.hideCCNumber(ccNum || '')
    });
  }

  @Post(ExamList.MoveZeroes)
  getMoveZeroes(
    @Body('nums') nums: number[],
    @Response() res: Res
  ): Res {
    return res.json({
      'nums': this.appService.moveZeroes(nums || [])
    });
  }
}
