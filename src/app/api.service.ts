import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private url: string = "http://localhost:3000";

  public isDeleted: boolean = false;
  public isUpdated: boolean = false;
  public isCreated: boolean = false;

  constructor(private http: HttpClient) {}

  // Get Contact
  getContact(id): Observable<Contact> {
    return this.http.get<Contact>(`${this.url}/get/${id}`);
  }

  // Get All Contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.url}/get`);
  }

  // Update Contact
  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.url}/put`, contact);
  }

  // Delete Contact
  deleteContact(id): Observable<Contact> {
    return this.http.delete<Contact>(`${this.url}/delete/${id}`);
  }

  // Create new Contact
  createContact(contact: Contact): Observable<Contact> {
    console.log(contact);
    let body = {
      name: contact.name,
      number: contact.number,
      email: contact.email,
      tags: []
    };
    if (contact.tags) {
      body.tags.push(contact.tags);
    }
    return this.http.post<Contact>(`${this.url}/post`, body);
  }
}

// Contact Modal
export class Contact {
  id: string;
  number: any;
  name: string;
  email: string;
  tags?: any;
}
