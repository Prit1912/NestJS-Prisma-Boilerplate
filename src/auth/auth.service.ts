import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { customError } from 'src/utils/customError';

@Injectable()
export class AuthService {
  async login(loginPayload: LoginDto) {
    try {
      return `This action does login`;
    } catch (error) {
      return customError(error);
    }
  }
}
