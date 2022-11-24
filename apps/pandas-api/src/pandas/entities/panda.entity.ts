import { ObjectType, Field, Int, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Panda {
  @Field(() => ID)
  id: number;

  @Field(() => Int, { description: 'Example field (placeholder)' })
  age: number;

  @Field()
  name: string;

  @Field()
  favoriteFood: string;
}
