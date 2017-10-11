import {Wallet} from "../model/wallet";

export class WalletUtil {

    public static getBalance(wallet: Wallet, wallets: Array<Wallet>) {
        let total: number = this.getWalletBalance(wallet);
        let lastWallet: Wallet = WalletUtil.getLastWallet(wallet, wallets);

        if (lastWallet != null) {
            total = total + WalletUtil.getBalance(lastWallet, wallets);
        }
        return total;
    }

    public static getWalletBalance(wallet: Wallet) {
        let total: number = 0;

        for (let entry of wallet.entries) {
            total = total + entry.value;
        }

        return total;
    }

    public static getCurrentWallet(wallets: Array<Wallet>) {
        let now = new Date();
        return wallets.filter((wallet: Wallet) => {
            return (wallet.year == now.getFullYear() && wallet.month == (now.getMonth() + 1 ));
        })[0];
    }

    public static getLastWallet(wallet: Wallet, wallets: Array<Wallet>) {
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