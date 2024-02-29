import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @IsNotEmpty()
    @Column()
    car: string;

    @Column({ default: "started" })
    status: string;

    @IsNotEmpty()
    @IsEmail()
    @Column()
    email: string;

    @Column({ default: false })
    isExecuted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column({default: null})
    completeAt: Date;
}