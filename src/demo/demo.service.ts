import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {
  messages: string[] = ['Hello, ', 'World!'];
  getMessages(): string[] {
    return this.messages;
  }
  getMessage(id: number): string {
    if (id < 0 || id >= this.messages.length) {
      return null;
    }
    return this.messages[id];
  }
  newMessage(m: string): string[] {
    this.messages.push(m);
    return this.messages;
  }
  editMessage(id: number, m: string): string {
    if (id < 0 || id >= this.messages.length) {
      return null;
    }
    this.messages[id] = m;
    return m;
  }
  deleteMessage(id: number): string[] {
    if (id < 0 || id >= this.messages.length) {
      return null;
    }
    this.messages.splice(id, 1);
    return this.messages;
  }
}
