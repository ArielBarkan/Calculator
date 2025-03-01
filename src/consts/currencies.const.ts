// Custom imports
import { currencyType } from "../types";

const SUPPORTED_CURRENCIES: currencyType[] = [
    { englishName: "Generic", localName: "Generic", symbol: "¤", ISO: "GEN", flag: "GEN", enabled: true },
    { englishName: "Argentine peso", localName: "Peso argentino", symbol: "$", ISO: "ARS", flag: "AR", enabled: true },
    {
        englishName: "Australian dollar",
        localName: "Australian Dollar",
        symbol: "$",
        ISO: "AUD",
        flag: "AU",
        enabled: true
    },
    {
        englishName: "Brazilian real",
        localName: "Real brasileiro",
        symbol: "R$",
        ISO: "BRL",
        flag: "BR",
        enabled: true
    },
    { englishName: "British pound", localName: "Pound Sterling", symbol: "£", ISO: "GBP", flag: "GB", enabled: false }, // ❌ UK (Partially Imperial)
    {
        englishName: "Canadian dollar",
        localName: "Canadian Dollar",
        symbol: "$",
        ISO: "CAD",
        flag: "CA",
        enabled: false // Canada (Mixed Metric & Imperial)
    },
    { englishName: "Chinese yuan", localName: "人民币", symbol: "¥", ISO: "CNY", flag: "CN", enabled: true },
    { englishName: "Euro", localName: "Euro", symbol: "€", ISO: "EUR", flag: "EU", enabled: true },
    { englishName: "Indian rupee", localName: "भारतीय रुपया ", symbol: "₹", ISO: "INR", flag: "IN", enabled: true },
    { englishName: "Israeli new shekel", localName: "שקל חדש", symbol: "₪", ISO: "ILS", flag: "IL", enabled: true },
    { englishName: "Japanese yen", localName: "日本円", symbol: "¥", ISO: "JPY", flag: "JP", enabled: true },
    { englishName: "Mexican peso", localName: "Peso mexicano", symbol: "$", ISO: "MXN", flag: "MX", enabled: true },
    {
        englishName: "Russian ruble",
        localName: "Российский рубль",
        symbol: "₽",
        ISO: "RUB",
        flag: "RU",
        enabled: true
    },
    {
        englishName: "South African rand",
        localName: "South African Rand",
        symbol: "R",
        ISO: "ZAR",
        flag: "ZA",
        enabled: false // South Africa (Mostly Metric, some Imperial remnants)
    },
    { englishName: "South Korean won", localName: "대한민국 원", symbol: "₩", ISO: "KRW", flag: "KR", enabled: true },
    {
        englishName: "Swiss franc",
        localName: "Schweizer Franken",
        symbol: "CHF",
        ISO: "CHF",
        flag: "CH",
        enabled: true
    },
    { englishName: "Turkish lira", localName: "Türk lirası", symbol: "₺", ISO: "TRY", flag: "TR", enabled: true },
    {
        englishName: "United States dollar",
        localName: "United States Dollar",
        symbol: "$",
        ISO: "USD",
        flag: "US",
        enabled: false // USA (Fully Imperial)
    }
];

export { SUPPORTED_CURRENCIES };
