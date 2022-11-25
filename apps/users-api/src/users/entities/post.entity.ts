import { ObjectType, Field, Directive, ID } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id", resolvable: false)')
export class Post {
  @Field(() => ID)
  id: number;
}
