import { Component, OnInit } from "@angular/core";
import { ApiService, Contact } from "../api.service";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  public contactsSubject: BehaviorSubject<Contact>;
  public contacts$: Observable<Contact>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.apiService.getContacts().subscribe((contacts: any) => {
      console.log(contacts);

      this.contactsSubject = new BehaviorSubject<Contact>(contacts);
      this.contacts$ = this.contactsSubject.asObservable();
    });
  }
}
