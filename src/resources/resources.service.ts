import { Injectable } from '@nestjs/common';

@Injectable()
export class ResourcesService {
  private readonly resources: any[];
  constructor() {
    this.resources = [
      {
        quote: 'Hello World',
        character: 'Shubham',
      }
    ];
  }

  getAll() {
    return this.resources;
  }
}