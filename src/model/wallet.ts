import {Entry} from "./entry";

export interface Wallet {
    id: string;
    month: number;
    year: number;
    balance?:number;
    entries?:Array<Entry>;
}