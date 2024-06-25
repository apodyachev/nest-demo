import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { DemoService } from './demo.service';

class Message {
  message: string;
}

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}
  @Get()
  getMessages(): string[] {
    return this.demoService.getMessages();
  }
  @Get(':id')
  getMessage(@Param('id') id: number): string {
    return this.demoService.getMessage(id);
  }
  @Post()
  newMessage(@Body() m: Message): string[] {
    return this.demoService.newMessage(m.message);
  }
  @Put(':id')
  editMessage(@Body() m: Message, @Param('id') id: number): string {
    return this.demoService.editMessage(id, m.message);
  }
  @Delete(':id')
  deleteMessage(@Param('id') id: number): string[] {
    return this.demoService.deleteMessage(id);
  }
}
