import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(userName: string, inputPassword: string) {
    try {
      const userData = await this.prisma.user.findUnique({
        where: { username: userName },
      });

      if (!userData) {
        return {
          message: 'User not found.',
          statusCode: 400,
        };
      }

      if (userData.password !== inputPassword) {
        return {
          message: 'Incorrect Password.',
          statusCode: 401,
        };
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userDetails } = userData;
      return userDetails;
    } catch (error) {
      return {
        message: `Failed to get user: ${error}`,
        statusCode: 500,
      };
    }
  }
}
