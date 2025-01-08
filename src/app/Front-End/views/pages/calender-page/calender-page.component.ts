import { Component } from '@angular/core';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid'; // For Month view
import interactionPlugin from '@fullcalendar/interaction'; // For date click

@Component({
  selector: 'app-calender-page',
  templateUrl: './calender-page.component.html',
  styleUrls: ['./calender-page.component.css']
})
export class CalenderPageComponent {

  // Define events array
  events: EventInput[] = [
    {
      title: 'Interview with Candidate A',
      start: '2025-01-08T14:00:00',
      end: '2025-01-08T14:30:00',
    },
    {
      title: 'Team Meeting',
      start: '2025-01-09T15:00:00',
      end: '2025-01-09T16:00:00',
    },
    {
      title: 'Interview with Candidate B',
      start: '2025-01-10T10:00:00',
      end: '2025-01-10T11:00:00',
    },
  ];

  calendarOptions: CalendarOptions = {
    dateClick: (arg) => this.handleDateClick(arg),
    
    initialView: 'dayGridMonth', // Default to List View
    plugins: [dayGridPlugin, listPlugin, interactionPlugin], // Load Month and List view plugins
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth', // Include both Month and List View buttons
    },
    eventContent: (arg) => {
      // Format event times for List View
      const startDate = arg.event.start ? new Date(arg.event.start) : null;
      const endDate = arg.event.end ? new Date(arg.event.end) : null;

      const startTime = startDate ? startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
      const endTime = endDate ? endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';
      const eventTime = startTime && endTime ? `${startTime} - ${endTime}` : '';

      if (arg.view.type === 'dayGridMonth') {
        return {
          html: `<div class="event-title" style="font-size: 12px; font-weight: bold; color: #333; margin-left:10px; line-height: 1.2; white-space: normal; word-wrap: break-word; overflow: hidden; max-width: 100%;">${arg.event.title}</div>`
        };
      }

      // List View Customization (show event name and time)
      return {
        html: `
          <div class="event-title">${arg.event.title}</div>
          <div class="event-time">${eventTime}</div>
        `
      };
    },
    events: this.events, // Use the events array defined above
  };

  // Handler for date click (can be used for additional logic)
  handleDateClick(arg: any) {
    alert('Date clicked: ' + arg.dateStr);
  }
}
