import { Model } from 'mongoose';
import { Myth, MythDocument } from './schemas/myth.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MythService {
  constructor(@InjectModel(Myth.name) private mythModel: Model<MythDocument>) {}

  async listarMyth() {
    const myths = await this.mythModel.find({});
    const total = await this.mythModel.find({}).count();
    return { message: `${total} lendas encontradas`, myths };
  }

  async cadastrarMyth(myth: Myth): Promise<Myth> {
    const createdMyth = new this.mythModel(myth);
    return createdMyth.save();
  }

  async encontrarMyth(titulo: string): Promise<Myth> {
    return this.mythModel.findOne({ titulo }).exec();
  }

  async deletarMyth(titulo: string): Promise<any> {
    return this.mythModel.deleteOne({ titulo }).exec();
  }
}
