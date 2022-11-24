import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePandaInput {
  @Field(() => Int, { description: 'age of panda' })
  age: number;

  @Field()
  name: string;
}
