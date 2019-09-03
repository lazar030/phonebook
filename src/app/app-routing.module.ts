import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EditContactComponent } from "./edit-contact/edit-contact.component";
import { ContactComponent } from "./contact/contact.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { NewContactComponent } from "./new-contact/new-contact.component";

const routes: Routes = [
  // Home
  {
    path: "",
    component: HomeComponent
  },

  // Contacts
  {
    path: "contacts",
    component: ContactsComponent
  },

  // Update Contact
  {
    path: "contact/update/:id",
    component: EditContactComponent
  },

  // Create Contact
  {
    path: "contact/new",
    component: NewContactComponent
  },

  // Contact
  {
    path: "contact/:id",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
