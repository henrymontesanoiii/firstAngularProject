import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getOneUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+ userId)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
