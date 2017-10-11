import {Entry} from "./entry";

export interface Wallet {
    entries: Array<Entry>;
    mes: number;
    ano: number;
}