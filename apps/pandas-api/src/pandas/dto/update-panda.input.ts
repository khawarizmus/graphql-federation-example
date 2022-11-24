import { CreatePandaInput } from './create-panda.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePandaInput extends PartialType(CreatePandaInput) {
  @Field(() => Int)
  id: number;
}
