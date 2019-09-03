import { Component, OnInit, AfterViewInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiService, Contact } from "../api.service";
import { Router, ActivatedRoute } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit, AfterViewInit {
  public contact: Contact = new Contact();
  public show: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.getContact(params.id);
    });
  }

  ngAfterViewInit() {
    $("#myModal").on("shown.bs.modal", function() {
      $("#myInput").trigger("focus");
    });
  }

  deleteContact() {
    this.apiService
      .deleteContact(this.contact.id)
      .subscribe((response: any) => {
        console.log(response);
        this.apiService.isDeleted = true;
        this.router.navigate(["/contacts"]);
      });
  }

  getContact(id) {
    this.apiService.getContact(id).subscribe((contact: any) => {
      console.log(contact);

      this.contact = contact[0];
    });
  }
}
