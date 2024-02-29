import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsNotEmpty()
    @Column()
    car: string;

    @Column({ default: "in progress" })
    status: string;

    @Column({ default: false })
    isExecuted: boolean;

    @Column({ default: false })
    engine: boolean;

    @Column({ default: false })
    transmission: boolean;

    @Column({ default: false })
    suspension: boolean;

    @Column({ default: false })
    body: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @Column({default: null})
    completeAt: Date;
}