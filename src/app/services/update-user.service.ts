import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user/user.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  // aqui estou simulando uma chamada para a API para atualizar as informações do usuário, mas como esse projeto é apenas uma prática de formulários reativos, vou apenas retornar um Observable com o novo usuário após um delay de 1 segundo para simular o tempo de resposta da API
  updateUser(newUser: IUser) {
    return new Observable<{ status: number; body: IUser }>((observer) => {
      setTimeout(() => {
        observer.next({ status: 201, body: structuredClone(newUser) });
        observer.complete();
      }, 1000);
    }).pipe(map((newUserResponse) => newUserResponse.body));
  }
}
