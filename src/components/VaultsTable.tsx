import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Info, ChevronDown, TrendingUp } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Vault = {
  id: string;
  name: string;
  icon: string;
  deposits: string;
  depositsUSD: string;
  liquidity: string;
  liquidityUSD: string;
  curator: string;
  exposure: string[];
  apy: string;
  featured?: boolean;
};

export const VaultsTable = () => {
  const [activeTab, setActiveTab] = useState<"positions" | "vaults">("positions");
  const [searchQuery, setSearchQuery] = useState("");

  const vaults: Vault[] = [
    {
      id: "1",
      name: "Steakhouse USDC",
      icon: "🥩",
      deposits: "461.33M USDC",
      depositsUSD: "$461.19M",
      liquidity: "77.17M USDC",
      liquidityUSD: "$77.15M",
      curator: "verified",
      exposure: ["USDC", "ETH", "BTC", "LINK"],
      apy: "4.53%",
      featured: true,
    },
    {
      id: "2",
      name: "Gauntlet USDT Core",
      icon: "💎",
      deposits: "444.07M USDT",
      depositsUSD: "$444.03M",
      liquidity: "63.17M USDT",
      liquidityUSD: "$63.16M",
      curator: "flag",
      exposure: ["USDT", "USDC", "ETH", "DAI", "WBTC"],
      apy: "4.60%",
    },
    {
      id: "3",
      name: "Gauntlet USDT Prime",
      icon: "💎",
      deposits: "261.96M USDT",
      depositsUSD: "$261.93M",
      liquidity: "46.12M USDT",
      liquidityUSD: "$46.12M",
      curator: "flag",
      exposure: ["USDC", "ETH", "DAI", "WETH", "USDT"],
      apy: "4.15%",
    },
    {
      id: "4",
      name: "Gauntlet USDC Prime",
      icon: "💎",
      deposits: "149.24M USDC",
      depositsUSD: "$149.20M",
      liquidity: "36.79M USDC",
      liquidityUSD: "$36.78M",
      curator: "flag",
      exposure: ["ETH", "USDC", "WETH", "LINK"],
      apy: "4.73%",
    },
    {
      id: "5",
      name: "Vault Bridge WBTC",
      icon: "₿",
      deposits: "915.79161546 WBTC",
      depositsUSD: "$94.47M",
      liquidity: "702.77493574 WBTC",
      liquidityUSD: "$72.50M",
      curator: "flag",
      exposure: ["BTC", "WBTC", "ETH"],
      apy: "0.02%",
    },
  ];

  const filteredVaults = vaults.filter((vault) =>
    vault.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="px-6 py-10 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Tabs */}
          <div className="flex items-center gap-8 mb-10 border-b border-border/50">
            <button
              onClick={() => setActiveTab("positions")}
              className={`pb-4 text-base font-medium transition-colors relative ${
                activeTab === "positions"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Your positions
              {activeTab === "positions" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground rounded-full"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("vaults")}
              className={`pb-4 text-base font-medium transition-colors relative ${
                activeTab === "vaults"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Vaults
              {activeTab === "vaults" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground rounded-full"
                />
              )}
            </button>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Deposit:</span>
                <Button variant="ghost" size="sm" className="h-9 gap-2 text-sm px-3 rounded-lg hover:bg-surface-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  All
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Curator:</span>
                <Button variant="ghost" size="sm" className="h-9 gap-2 text-sm px-3 rounded-lg hover:bg-surface-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  All
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg hover:bg-surface-1">
                <Info className="h-5 w-5 text-muted-foreground" />
              </Button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Filter vaults"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-[220px] h-10 rounded-lg border-border/50 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <Card className="bg-white border border-border/50 overflow-hidden rounded-lg shadow-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-surface-1/50 hover:bg-surface-1/50 border-b border-border/50">
                  <TableHead className="font-semibold text-muted-foreground text-sm h-14 px-6">Vault</TableHead>
                  <TableHead className="font-semibold text-muted-foreground text-sm h-14 px-6">
                    <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                      Deposits
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </TableHead>
                  <TableHead className="font-semibold text-muted-foreground text-sm h-14 px-6">Liquidity</TableHead>
                  <TableHead className="font-semibold text-muted-foreground text-sm h-14 px-6">Curator</TableHead>
                  <TableHead className="font-semibold text-muted-foreground text-sm h-14 px-6">Exposure</TableHead>
                  <TableHead className="font-semibold text-muted-foreground text-sm h-14 px-6 text-right">APY</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredVaults.map((vault, index) => (
                  <>
                    <TableRow 
                      key={vault.id} 
                      className="hover:bg-surface-1/30 transition-colors border-0"
                    >
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-primary/20 to-purple-accent/20 flex items-center justify-center text-2xl">
                          {vault.icon}
                        </div>
                        <span className="font-semibold text-foreground text-base">{vault.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-6">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-foreground text-sm">{vault.deposits}</span>
                        <span className="text-xs text-muted-foreground bg-surface-1 px-2 py-0.5 rounded-md inline-block w-fit">
                          {vault.depositsUSD}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-6">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-semibold text-foreground text-sm">{vault.liquidity}</span>
                        <span className="text-xs text-muted-foreground bg-surface-1 px-2 py-0.5 rounded-md inline-block w-fit">
                          {vault.liquidityUSD}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center justify-start">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          vault.curator === "verified" 
                            ? "bg-emerald-success/15" 
                            : "bg-blue-primary/15"
                        }`}>
                          {vault.curator === "verified" ? (
                            <svg className="w-5 h-5 text-emerald-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-blue-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center">
                        {vault.exposure.slice(0, 4).map((token, i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-primary/30 to-cyan-accent/30 flex items-center justify-center text-[11px] font-bold text-foreground border-2 border-white shadow-sm -ml-2 first:ml-0"
                            style={{ zIndex: vault.exposure.length - i }}
                            title={token}
                          >
                            {token.slice(0, 1)}
                          </div>
                        ))}
                        {vault.exposure.length > 4 && (
                          <span className="text-xs font-semibold text-muted-foreground ml-2">
                            +{vault.exposure.length - 4}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="py-5 px-6 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <span className="font-semibold text-foreground text-base">{vault.apy}</span>
                        {vault.featured && (
                          <TrendingUp className="h-4 w-4 text-blue-primary" />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                  {/* Spacer Row */}
                  {index < filteredVaults.length - 1 && (
                    <tr key={`spacer-${vault.id}`} className="h-3 bg-background border-0">
                      <td colSpan={6} className="p-0"></td>
                    </tr>
                  )}
                  </>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
