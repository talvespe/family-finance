import {Category} from "./category";
import {EntryFixed} from "./entry-fixed";
import {User} from "./user";
import {Wallet} from "./wallet";

export interface Entry {
    date: Date;
    value: number;
    name: string;
    category: Category;
    entryFixed: EntryFixed;
    user: User;
}