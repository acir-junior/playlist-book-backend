import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateBookDto {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    url: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    cover: string;

    @ApiProperty({ required: false })
    @IsString()
    author: string;

    @ApiProperty({ required: false })
    @IsString()
    description: string;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    @IsString()
    playlistId: string;
}
