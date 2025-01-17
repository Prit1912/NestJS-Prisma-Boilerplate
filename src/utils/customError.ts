import { BadRequestException } from '@nestjs/common';

export const customError = (error) => {
  if (error.response) {
    throw error;
  } else {
    throw new BadRequestException(error.message || 'Something went wrong');
  }
};
