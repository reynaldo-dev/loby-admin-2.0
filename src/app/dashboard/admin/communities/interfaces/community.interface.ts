// find all communities

export interface ICommunity {
     id: string;
     name: string;
     description: string;
     color: string;
     link: null;
     createdAt: string;
     users: User[];
     _count: Count;
}

export interface Count {
     users: number;
}

export interface User {
     userId: string;
     communityId: string;
     createdAt: string;
}
