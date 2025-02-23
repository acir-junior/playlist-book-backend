import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    title?: string;

    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    url?: string;

    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    cover?: string;

    @ApiProperty({ required: false })
    @IsString()
    author?: string;

    @ApiProperty({ required: false })
    @IsString()
    description?: string;

    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    playlistId?: string;
}