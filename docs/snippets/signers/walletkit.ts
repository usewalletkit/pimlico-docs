// [!region main]
import { WalletKitLink, WalletKitLinkProvider } from "@walletkit/react-link";
import { providerToSmartAccountSigner } from "permissionless"

// Config options here will be specific to your project.  See the WalletKit docs for more info.
const wkLink = new WalletKitLink({
	projectId: "<WalletKit-Project-ID>",
  
	// WalletKit defaults to smart contract based wallets.
	// In this case, we want to create an EOA wallet.
	walletType: "eoa",
  });
await wkLink.connect();

// Get the Provider and EOA address (this will be the address of the signer) from WalletKit
const wkProvider = await wkLink.ethereumProvider()

if (!wkProvider) {
	throw new Error("No provider found")
}

// Create the smart account signer from the provider and signer address
const smartAccountSigner = await providerToSmartAccountSigner(wkProvider)
// [!endregion main]
