import { Time } from "@angular/common";

export interface Event {
    eventDetails: {
        eventName:string;
        scheduleDate:Date;
        startTime:Time;
        endTime:Time;
    }
}