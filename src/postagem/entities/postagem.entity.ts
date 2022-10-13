import { IsNotEmpty, MaxLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: "tb_postagens" })
export class Postagem {
       @PrimaryGeneratedColumn()
       id: number;

       @IsNotEmpty()
       @MaxLength(50)
       @Column({ length: 1000, nullable: false })
       titulo: string;

       @IsNotEmpty()
       @Column({ length: 1000, nullable: false })
       texto: string;

       @UpdateDateColumn()
       data: Date;
}