import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Event } from 'src/app/Front-End/core/model/event.model';

@Component({
  selector: 'app-event-form-page',
  templateUrl: './event-form-page.component.html',
  styleUrls: ['./event-form-page.component.css']
})
export class EventFormPageComponent {
  eventForm!: FormGroup; // Form group for the Event

  submitted = false; // Track submission state

  constructor(private fb: FormBuilder) {
    // Initialize FormGroup with structure matching the interface
    this.eventForm = this.fb.group({
      eventName: ['', [Validators.required, Validators.minLength(3)]],
      scheduleDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

    // Getter for easy access to form controls
    get f() {
      return this.eventForm.controls;
    }

    onSubmit() {
      this.submitted = true;
  
      // Stop if form is invalid
      if (this.eventForm.invalid) {
        return;
      }
  
      // Prepare the data according to the interface structure
      const eventData: Event = {
        eventDetails: {
          eventName: this.eventForm.value.eventName,
          scheduleDate: this.eventForm.value.scheduleDate,
          startTime: this.eventForm.value.startTime,
          endTime: this.eventForm.value.endTime
        }
      };
  
      console.log('Event Submitted:', eventData);
  
      // Perform API call or further logic here...
    }

}
