import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string) {
    return this.http.post('https://us-central1-glev-1270.cloudfunctions.net/sendEmail', { name, email, message });
  }
}
