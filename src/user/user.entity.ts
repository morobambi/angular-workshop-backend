import {ApiModelProperty} from '@nestjs/swagger';

export class User {
    @ApiModelProperty() firstName: string;
    @ApiModelProperty() lastName: string;
    @ApiModelProperty() age: number;
    @ApiModelProperty() email: string;
}
