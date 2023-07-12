import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root',
})

export class PokeService {

    private url:string = 'https://pokeapi.co/api/v2/pokemon/ditto'

    constructor(private http: HttpClient){}

    getPokemon(){
        return  this.http.get(this.url)
    }
}