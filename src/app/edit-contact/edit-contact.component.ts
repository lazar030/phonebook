import { Component, OnInit } from "@angular/core";
import { Contact, ApiService } from "../api.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-contact",
  templateUrl: "./edit-contact.component.html",
  styleUrls: ["./edit-contact.component.scss"]
})
export class EditContactComponent implements OnInit {
  public nameIsValid: boolean = true;
  public numberIsValid: boolean = true;

  public contact: Contact = new Contact();

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

  // Get Contact by ID
  getContact(id) {
    this.apiService.getContact(id).subscribe((contact: Contact) => {
      this.contact = contact[0];
    });
  }

  // On Form Submit
  onSubmit(form: NgForm) {
    if (
      form.form.controls.name.status == "INVALID" &&
      form.form.controls.number.status == "INVALID"
    ) {
      this.nameIsValid = false;
      this.numberIsValid = false;
    } else if (form.form.controls.name.status == "INVALID") {
      this.nameIsValid = false;
    } else if (form.form.controls.number.status == "INVALID") {
      this.numberIsValid = false;
    } else {
      this.updateContact(form.form.value);
    }
  }

  updateContact(contact: Contact) {
    this.apiService.updateContact(contact).subscribe(
      (response: any) => {
        this.apiService.isUpdated = true;

        this.router.navigate(["/contacts"]);
      },
      (err: Error) => {
        console.error(err.message);
      }
    );
  }

  // On Key Press event
  onKeyDown(e: KeyboardEvent, prod) {
    if (
      // Allow: Delete, Backspace, Tab, Escape, Enter
      (e.keyCode === 65 && e.ctrlKey === true) || // Allow: Ctrl+A
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 67 && e.ctrlKey === true) || // Allow: Ctrl+C
      (e.keyCode === 86 && e.ctrlKey === true) || // Allow: Ctrl+V
      (e.keyCode === 88 && e.ctrlKey === true) || // Allow: Ctrl+X
      (e.keyCode === 65 && e.metaKey === true) || // Cmd+A (Mac)
      (e.keyCode === 67 && e.metaKey === true) || // Cmd+C (Mac)
      (e.keyCode === 86 && e.metaKey === true) || // Cmd+V (Mac)
      (e.keyCode === 88 && e.metaKey === true) || // Cmd+X (Mac)
      (e.keyCode >= 35 && e.keyCode <= 39) // Home, End, Left, Right
    ) {
      return; // let it happen, don't do anything
    }
    // Ensure that it is a number and stop the keypress
    else if (
      (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  }
}
