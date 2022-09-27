import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getExamples() {
    return this.prisma.user.findMany();
  }

  user(userId: number) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }
}
