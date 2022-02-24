import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDTO } from '../dto/users.dto';
import { UsersEntity } from '../entity/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private repo: Repository<UsersEntity>,
    ) {

    }

    async showAll() {
        return await this.repo.find();
    }

    async create(data: UsersDTO) {
        const user = this.repo.create(data);
        await this.repo.save(data);
        return user;
    }

    async findByEmail(email: string) {
        return await this.repo.findOne({ email: email });

    }

    async read(id: number) {
        return await this.repo.findOne({ where: { id: id } });
    }

    async update(id: number, data: Partial<UsersDTO>) {
        await this.repo.update({ id }, data);
        return await this.repo.findOne({ id });
    }

    async destroy(id: number) {
        await this.repo.delete({ id });
        return { deleted: true };
    }
}