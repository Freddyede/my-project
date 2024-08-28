import {Body, Controller, Post, Req} from '@nestjs/common';
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any): Promise<any> {
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Req() req: any): Promise<{message: string; status: number}> {
    return this.authService.register(req.body);
  }
}
