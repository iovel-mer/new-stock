import { Component } from '@angular/core';
import { Testimonials } from "./testimonials/testimonials";



@Component({
  selector: 'app-middle',
  imports: [Testimonials, ],
  templateUrl: './middle.html',
  styleUrl: './middle.css'
})
export class Middle {

}
