import { IsNotEmpty, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePlaylistDto {
    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    title?: string;

    @ApiProperty({ required: false })
    @IsString()
    description?: string;

    @ApiProperty({ required: false })
    @IsNotEmpty()
    @IsString()
    author?: string;
}
    