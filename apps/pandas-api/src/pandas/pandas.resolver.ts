import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PandasService } from './pandas.service';
import { Panda } from './entities/panda.entity';
import { CreatePandaInput } from './dto/create-panda.input';
import { UpdatePandaInput } from './dto/update-panda.input';

@Resolver(() => Panda)
export class PandasResolver {
  constructor(private readonly pandasService: PandasService) {}

  @Mutation(() => Panda)
  createPanda(@Args('createPandaInput') createPandaInput: CreatePandaInput) {
    return this.pandasService.create(createPandaInput);
  }

  @Query(() => [Panda], { name: 'pandas' })
  findAll() {
    return this.pandasService.findAll();
  }

  @Query(() => Panda, { name: 'panda' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pandasService.findOne(id);
  }

  @Mutation(() => Panda)
  updatePanda(@Args('updatePandaInput') updatePandaInput: UpdatePandaInput) {
    return this.pandasService.update(updatePandaInput.id, updatePandaInput);
  }

  @Mutation(() => Panda)
  removePanda(@Args('id', { type: () => Int }) id: number) {
    return this.pandasService.remove(id);
  }
}
