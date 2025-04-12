import { Button } from "@/shared/components/ui/button";
import { publicClient, walletClient } from "@/shared/config/wagmi.config";
import { UNISWAP_ADDRESS } from "@/shared/contstants/addresses";
import UNISWAP_ABI from "@/shared/abi/swap.json";
import { useState } from "react";
import { getContract, zeroAddress } from "viem";
import { useAccount } from "wagmi";

export function Index() {
  const [state, setState] = useState<number | null>(null);
  const account = useAccount();

  const handleClick = async () => {
    console.log("handleClick", account);
    const contract = getContract({
      address: UNISWAP_ADDRESS,
      abi: UNISWAP_ABI,
      client: publicClient,
    });

    const result = (await contract.read.swapCallCount()) as bigint;

    setState(Number(result));
  };

  const makerSwap = async () => {
    const contract = getContract({
      address: UNISWAP_ADDRESS,
      abi: UNISWAP_ABI,
      client: walletClient,
    });

    await contract.write.swap([zeroAddress, zeroAddress, 0, 0, 0]);
  };

  // const makerSwap2 = async () => {
  //   // const hash = await client.sendTransaction({
  //   //   account: address,
  //   //   to: '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC',
  //   //   value: parseEther('0.001')
  //   // })
  // };

  return (
    <div className="p-2">
      <p>swaps count: {state ? state : "нет"}</p>
      <Button onClick={handleClick}>Get swaps</Button>
      <Button onClick={makerSwap}>Make swap</Button>
    </div>
  );
}
