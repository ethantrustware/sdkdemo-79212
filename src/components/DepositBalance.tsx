import { useState, useEffect } from "react";
import { createPublicClient, http, formatUnits } from "viem";
import { base } from "viem/chains";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChevronRight } from "lucide-react";

const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as const;
const DEPOSIT_WALLET = "0xEb212FE20F26243EC4D4DF2DD49c8aA9FA75A201" as const;
const USDC_DECIMALS = 6;

const ERC20_ABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
] as const;

const basePublicClient = createPublicClient({
  chain: base,
  transport: http(),
});

export function DepositBalance() {
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // @ts-expect-error - Viem v2 type compatibility issue
      const balanceResult = await basePublicClient.readContract({
        address: USDC_ADDRESS,
        abi: ERC20_ABI,
        functionName: "balanceOf" as const,
        args: [DEPOSIT_WALLET],
      }) as bigint;

      const formattedBalance = formatUnits(balanceResult, USDC_DECIMALS);
      setBalance(formattedBalance);
    } catch (err) {
      console.error("Error fetching balance:", err);
      setError("Failed to fetch balance");
      setBalance(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const formatCurrency = (value: string) => {
    const num = parseFloat(value);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <Card className="p-4 bg-white border border-border hover:bg-surface-1 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-blue-primary/10 flex items-center justify-center text-2xl">
            📊
          </div>
          <div>
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              USDC Deposits
              <Button
                variant="ghost"
                size="sm"
                onClick={fetchBalance}
                disabled={isLoading}
                className="h-5 w-5 p-0"
              >
                <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
              </Button>
            </h3>
            <p className="text-sm text-muted-foreground">
              {isLoading ? "Loading..." : error ? error : "On Base Network"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground tabular-nums">
            {balance ? formatCurrency(balance) : "$0.00"}
          </span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </Card>
  );
}
