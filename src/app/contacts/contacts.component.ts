import { Component, OnInit } from "@angular/core";
import { ApiService, Contact } from "../api.service";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"]
})
export class ContactsComponent implements OnInit {
  public contactsSubject: BehaviorSubject<Contact>;
  public contacts$: Observable<Contact>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.getBooks();
    this.check();
  }

  getBooks() {
    this.apiService.getContacts().subscribe((contacts: any) => {
      console.log(contacts);

      this.contactsSubject = new BehaviorSubject<Contact>(contacts);
      this.contacts$ = this.contactsSubject.asObservable();
    });
  }

  check() {
    if (this.apiService.isDeleted) {
      setTimeout(() => {
        this.apiService.isDeleted = false;
      }, 3000);
    } else if (this.apiService.isCreated) {
      setTimeout(() => {
        this.apiService.isCreated = false;
      }, 3000);
    } else if (this.apiService.isUpdated) {
      setTimeout(() => {
        this.apiService.isUpdated = false;
      }, 3000);
    }
  }
}
