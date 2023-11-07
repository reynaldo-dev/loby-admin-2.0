//events at date

export interface IEventsAtDate {
     id: string;
     title: string;
     dateTime: string;
     community: Community;
     status: string;
}

export interface Community {
     id: string;
     name: string;
     color: string;
}
