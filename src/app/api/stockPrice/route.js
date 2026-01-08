import { NextResponse } from "next/server";

// BSE Stock Symbol for Apis India Ltd: APIS
// Yahoo Finance format: APIS.BO (BO = Bombay Stock Exchange)
const STOCK_SYMBOL = "APIS.BO";

export async function GET() {
  try {
    // Simple API call to Yahoo Finance
    const yahooFinanceUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${STOCK_SYMBOL}?interval=1m&range=1d`;
    
    const response = await fetch(yahooFinanceUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.chart && data.chart.result && data.chart.result[0]) {
        const result = data.chart.result[0];
        const meta = result.meta;
        
        const price = meta.regularMarketPrice || meta.currentPrice || meta.previousClose;
        
        if (price && price > 0) {
          return NextResponse.json({
            success: true,
            price: parseFloat(price).toFixed(2),
            currency: "INR",
            symbol: "APIS",
            exchange: "BSE"
          });
        }
      }
    }

    return NextResponse.json({
      success: false,
      error: "Unable to fetch stock price",
      price: null,
    }, { status: 200 });
    
  } catch (error) {
    console.error("Error fetching stock price:", error);
    return NextResponse.json({
      success: false,
      error: error?.message || "Internal server error",
      price: null,
    }, { status: 200 });
  }
}

