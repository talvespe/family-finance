import {Wallet} from "../model/wallet";

export class WalletUtil {
    public static getBallance(wallet: Wallet, wallets: Array<Wallet>) {
        let total: number = this.getWalletBalance(wallet);
        let lastWallet: Wallet = wallets.filter((walletFilter) => {
            let mesAnterior: number;
            let anoAnterior: number;
            if (wallet.mes == 1) {
                mesAnterior = 12;
                anoAnterior = wallet.ano - 1;
            } else {
                mesAnterior = wallet.mes - 1;
                anoAnterior = wallet.ano;
            }
            return walletFilter.ano == anoAnterior && walletFilter.mes == mesAnterior;
        })[0];

        if (lastWallet != null) {
            total = total + WalletUtil.getBallance(lastWallet, wallets);
        }
        return total;
    }

    public static getWalletBalance(wallet: Wallet) {
        let total: number = 0;

        for (let entry of wallet.entries) {
            if (entry.plus) {
                total = total + entry.value;
            } else {
                total = total - entry.value;
            }
        }

        return total;
    }

}