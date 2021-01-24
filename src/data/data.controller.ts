import { Controller, Get } from '@nestjs/common';
import  data from './population-data'
@Controller('data')
export class DataController {
    @Get()
    getData() {
        return data
    }
}

