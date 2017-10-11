import {Entry} from "./entry";

export interface Wallet {
    entries: Array<Entry>;
    month: number;
    year: number;
}