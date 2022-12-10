export interface Event{
    _id: string,
    Title: string,
    Description: string,
    Address: string,
    Image:string,
    Date:string
}
export interface AjoutEvent{
    _id: string,
    Title: string,
    Description: string,
    Address: string,
    Image:string,
    DateEven:string
}
export interface Events{
    Message:string,
    items:[Event]
}