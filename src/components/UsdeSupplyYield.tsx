import { useCallback, useEffect, useState } from "react";
import { createPublicClient, formatUnits, http } from "viem";
import { mainnet } from "viem/chains";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChevronRight } from "lucide-react";

const ethPublicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const USDE_POOL_ADDRESS = "0xd4f33d94cb118378a4b77540182c2123439ac709" as const;
const SUPPLY_FUNCTIONS = ["getAPY", "supplyAPY", "getSupplyRate"] as const;

const USDE_POOL_ABI = [
  { name: "getAPY", type: "function", stateMutability: "view", inputs: [], outputs: [{ name: "", type: "uint256" }] },
  { name: "supplyAPY", type: "function", stateMutability: "view", inputs: [], outputs: [{ name: "", type: "uint256" }] },
  { name: "getSupplyRate", type: "function", stateMutability: "view", inputs: [], outputs: [{ name: "", type: "uint256" }] },
] as const;

const formatYieldValue = (raw: bigint) => {
  const scales = [
    { decimals: 27, multiplier: 100 },
    { decimals: 18, multiplier: 100 },
    { decimals: 9, multiplier: 100 },
  ];

  for (const { decimals, multiplier } of scales) {
    try {
      const formatted = parseFloat(formatUnits(raw, decimals));
      if (!Number.isFinite(formatted)) continue;
      const percent = formatted * multiplier;
      if (percent > 0 && percent < 1000) return `${percent.toFixed(2)}%`;
    } catch { continue; }
  }
  return `${(parseFloat(formatUnits(raw, 18)) * 100).toFixed(2)}%`;
};

export function UsdeSupplyYield() {
  const [supplyYield, setSupplyYield] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchYield = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    for (const functionName of SUPPLY_FUNCTIONS) {
      try {
        // @ts-expect-error - Viem v2 type compatibility issue
        const rate = await ethPublicClient.readContract({
          address: USDE_POOL_ADDRESS,
          abi: USDE_POOL_ABI,
          functionName,
        }) as bigint;

        setSupplyYield(formatYieldValue(rate));
        setIsLoading(false);
        return;
      } catch { continue; }
    }

    setError("Failed to fetch yield");
    setSupplyYield(null);
    setIsLoading(false);
  }, []);

  useEffect(() => { fetchYield(); }, [fetchYield]);

  return (
    <Card className="p-4 bg-white border border-border hover:bg-surface-1 transition-colors">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-purple-primary/10 flex items-center justify-center text-2xl">
            💎
          </div>
          <div>
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              USDe Yield
              <Button
                variant="ghost"
                size="sm"
                onClick={fetchYield}
                disabled={isLoading}
                className="h-5 w-5 p-0"
              >
                <RefreshCw className={`h-3 w-3 ${isLoading ? "animate-spin" : ""}`} />
              </Button>
            </h3>
            <p className="text-sm text-muted-foreground">
              {isLoading ? "Loading..." : error ? error : "Savings Pool APY"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground tabular-nums">
            {supplyYield || "0.00%"}
          </span>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </Card>
  );
}
