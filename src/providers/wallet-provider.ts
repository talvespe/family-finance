import {Wallet} from "../model/wallet";
import {Injectable} from "@angular/core";
import {AngularFirestore} from "angularfire2/firestore";

@Injectable()
export class WalletProvider {

    constructor(private afs: AngularFirestore) {

    }

    public getBalance(wallet: Wallet, wallets: Array<Wallet>) {
        let total: number = this.getWalletBalance(wallet);
        let lastWallet: Wallet = this.getLastWallet(wallet, wallets);

        if (lastWallet != null) {
            total = total + this.getBalance(lastWallet, wallets);
        }
        return total;
    }

    public getWalletBalance(wallet: Wallet) {
        let total: number = 0;
        // this.userDoc = this.afs.doc<User>("/users/" + user.id);
        // for (let entry of wallet.entries) {
        //     total = total + entry.value;
        // }

        return total;
    }

    public getCurrentWallet(wallets: Array<Wallet>) {
        let now = new Date();
        return wallets.filter((wallet: Wallet) => {
            return (wallet.year == now.getFullYear() && wallet.month == (now.getMonth() + 1 ));
        })[0];
    }

    public getLastWallet(wallet: Wallet, wallets: Array<Wallet>) {
        return wallets.filter((walletFilter) => {
            let mesAnterior: number;
            let anoAnterior: number;
            if (wallet.month == 1) {
                mesAnterior = 12;
                anoAnterior = wallet.year - 1;
            } else {
                mesAnterior = wallet.month - 1;
                anoAnterior = wallet.year;
            }
            return walletFilter.year == anoAnterior && walletFilter.month == mesAnterior;
        })[0];
    }

}