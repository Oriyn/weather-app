import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

const axios = require('axios').default;

export class LocationDto {
  url: string;
}

@Controller()
export class AppController {
  private apiKey = 'cf002751564a4c78f5f7ed479f1b9ba3';
  constructor(private readonly appService: AppService) {
  }


  @Post('/weather')
  async getWeather(@Body() weatherObj: LocationDto) {
    return axios.get(`${weatherObj.url}${this.apiKey}`).then((response) => {
      return response.data;
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
