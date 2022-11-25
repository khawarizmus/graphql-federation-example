import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      authorId: 1,
      title: 'Rework',
    },
  ];

  create(createPostInput: CreatePostInput) {
    const id = this.posts.length + 1;
    this.posts.push(
      Object.assign(createPostInput, {
        id,
      }),
    );
    return this.posts[id - 1];
  }

  findAll() {
    return this.posts;
  }

  findById(id: number) {
    return this.posts.find((post) => post.id === id);
  }

  forAuthor(id: number) {
    return this.posts.filter((post) => post.authorId === id);
  }

  update(id: number, updatePostInput: UpdatePostInput) {
    return (this.posts[id - 1] = Object.assign(
      this.posts[id - 1],
      updatePostInput,
    ));
  }

  remove(id: number) {
    const start = id - 1;
    const deleteCount = 1;
    return this.posts.splice(start, deleteCount)[0];
  }
}
