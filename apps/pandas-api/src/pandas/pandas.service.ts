import { Injectable } from '@nestjs/common';
import { CreatePandaInput } from './dto/create-panda.input';
import { UpdatePandaInput } from './dto/update-panda.input';
import { Panda } from './entities/panda.entity';

@Injectable()
export class PandasService {
  private pandas: Panda[] = [
    {
      id: 1,
      name: 'Puffy',
      age: 20,
      favoriteFood: 'Bamboo',
    },
    { id: 2, name: 'Basi', age: 21, favoriteFood: 'Bamboo' },
    { id: 3, name: 'Yun', age: 23, favoriteFood: 'Bamboo' },
  ];

  create(createPandaInput: CreatePandaInput) {
    const id = this.pandas.length + 1;
    this.pandas.push(
      Object.assign(createPandaInput, {
        id,
        favoriteFood: 'Bamboo',
      }),
    );
    return this.pandas[id - 1];
  }

  findAll() {
    return this.pandas;
  }

  findById(id: number) {
    return this.pandas.find((panda) => panda.id === id);
  }

  update(id: number, updatePandaInput: UpdatePandaInput) {
    return (this.pandas[id - 1] = Object.assign(
      this.pandas[id - 1],
      updatePandaInput,
    ));
  }

  remove(id: number) {
    const start = id - 1;
    const deleteCount = 1;
    return this.pandas.splice(start, deleteCount)[0];
  }
}
