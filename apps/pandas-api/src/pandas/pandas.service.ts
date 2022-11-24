import { Injectable } from '@nestjs/common';
import { CreatePandaInput } from './dto/create-panda.input';
import { UpdatePandaInput } from './dto/update-panda.input';

@Injectable()
export class PandasService {
  create(createPandaInput: CreatePandaInput) {
    return 'This action adds a new panda';
  }

  findAll() {
    return `This action returns all pandas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} panda`;
  }

  update(id: number, updatePandaInput: UpdatePandaInput) {
    return `This action updates a #${id} panda`;
  }

  remove(id: number) {
    return `This action removes a #${id} panda`;
  }
}
