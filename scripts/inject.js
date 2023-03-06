import { EIP1193Provider } from "@secux/providers";
import { SecuxWalletHandler } from "@secux/transport-handler";


const handler = new SecuxWalletHandler({ packetize: true });
const provider = new EIP1193Provider("https://eth.llamarpc.com", handler);
Object.defineProperty(global, "ethereum", {
    enumerable: true,
    configurable: false,
    writable: false,
    value: provider
});