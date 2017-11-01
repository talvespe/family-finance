import {Category} from "./category";
import {EntryFixed} from "./entry-fixed";

export interface Entry {
    date: Date;
    value: number;
    name: string;
    category: Category;
    entryFixed: EntryFixed;
}