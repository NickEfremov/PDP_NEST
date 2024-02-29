import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Suspension {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @IsNotEmpty()
    @Column()
    car: string;

    @Column({ default: "in progress" })
    status: string;

    @Column({ default: false })
    isExecuted: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column({default: null})
    completeAt: Date;
}