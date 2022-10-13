import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

@Injectable()
export class PostagemService {
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    update(postagem: Postagem): Promise<Postagem> {
        throw new Error("Method not implemented.");
    }
    create(postagem: Postagem): Promise<Postagem> {
        throw new Error("Method not implemented.");
    }
    findByTitulo(titulo: string): Promise<Postagem[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: number): Promise<Postagem> {
        throw new Error("Method not implemented.");
    }

    constructor(
        @InjectRepository(Postagem)
        private PostagemRepository: Repository<Postagem>
    )  {}

    async findAll(): Promise<Postagem[]> {
        return await this.PostagemRepository.find()
    }
}