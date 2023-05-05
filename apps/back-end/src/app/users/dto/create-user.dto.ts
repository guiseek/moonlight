import { IsNotEmpty, MinLength, ValidateIf } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Usuário obrigatório'
  })
  @ValidateIf(u => {
    console.log(u.username.length > 0);
    console.log(u);
    return u.username.length > 0
  })
  @MinLength(3, {
    message: 'Usuário muito curto'
  })
  username: string
  @IsNotEmpty({
    message: 'Senha obrigatória'
  })
  @MinLength(6, {
    message: 'Senha muito curta'
  })
  password: string
}
