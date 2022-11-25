import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [PostsResolver, UsersResolver, PostsService],
})
export class PostsModule {}
