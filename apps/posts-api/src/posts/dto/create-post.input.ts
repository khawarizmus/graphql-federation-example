import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field(() => Int, { description: 'author id refer to a user' })
  authorId: number;
}
