import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory:(configService: ConfigService) =>({
                type: 'mysql',
                host: configService.getOrThrow('APP_MYSQL_HOST'),
                port: configService.getOrThrow('APP_MYSQL_PORT'),
                database: configService.getOrThrow('MYSQL_DATABASE'),
                username: configService.getOrThrow('APP_MYSQL_USERNAME'),
                password: configService.getOrThrow('APP_MYSQL_PASSWORD'),
                autoLoadEntities: true,
                synchronize: configService.getOrThrow('APP_MYSQL_SYNCHRONIZE'),
            }),
            inject: [ConfigService],
        }) 
    ]
})
export class DatabaseModule{

}