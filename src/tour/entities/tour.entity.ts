import { ModelEntity } from "src/global/general.entities";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class TourEntity extends ModelEntity{
    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column({default: 0})
    numbersGuest: number;

    @Column()
    thumbnail: string;

    @Column()
    document: string;

    @ManyToOne(() => UserEntity, (user)=> user.id)
    guide: UserEntity;
}