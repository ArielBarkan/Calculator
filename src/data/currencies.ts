// Custom imports
import { currencyType } from "../types";

// TODO: decide which currencies to display
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const allCurrencies: currencyType[] = [
    { name: "Afghan Afghani", symbol: "؋", ISO: "AFN" },
    { name: "Albanian Lek", symbol: "L", ISO: "ALL" },
    { name: "Algerian Dinar", symbol: "د.ج", ISO: "DZD" },
    { name: "Angolan Kwanza", symbol: "Kz", ISO: "AOA" },
    { name: "Argentine Peso", symbol: "$", ISO: "ARS" },
    { name: "Armenian Dram", symbol: "֏", ISO: "AMD" },
    { name: "Aruban Florin", symbol: "ƒ", ISO: "AWG" },
    { name: "Australian Dollar", symbol: "$", ISO: "AUD" },
    { name: "Azerbaijani Manat", symbol: "₼", ISO: "AZN" },
    { name: "Bahamian Dollar", symbol: "$", ISO: "BSD" },
    { name: "Bahraini Dinar", symbol: ".د.ب", ISO: "BHD" },
    { name: "Bangladeshi Taka", symbol: "৳", ISO: "BDT" },
    { name: "Barbadian Dollar", symbol: "$", ISO: "BBD" },
    { name: "Belarusian Ruble", symbol: "Br", ISO: "BYN" },
    { name: "Belize Dollar", symbol: "$", ISO: "BZD" },
    { name: "Bermudian Dollar", symbol: "$", ISO: "BMD" },
    { name: "Bhutanese Ngultrum", symbol: "Nu.", ISO: "BTN" },
    { name: "Bolivian Boliviano", symbol: "Bs.", ISO: "BOB" },
    { name: "Bosnia and Herzegovina Convertible Mark", symbol: "KM", ISO: "BAM" },
    { name: "Botswana Pula", symbol: "P", ISO: "BWP" },
    { name: "Brazilian Real", symbol: "R$", ISO: "BRL" },
    { name: "British Pound Sterling", symbol: "£", ISO: "GBP" },
    { name: "Brunei Dollar", symbol: "$", ISO: "BND" },
    { name: "Bulgarian Lev", symbol: "лв", ISO: "BGN" },
    { name: "Burundian Franc", symbol: "Fr", ISO: "BIF" },
    { name: "Cabo Verdean Escudo", symbol: "$", ISO: "CVE" },
    { name: "Cambodian Riel", symbol: "៛", ISO: "KHR" },
    { name: "Canadian Dollar", symbol: "$", ISO: "CAD" },
    { name: "Cayman Islands Dollar", symbol: "$", ISO: "KYD" },
    { name: "Central African CFA Franc", symbol: "Fr", ISO: "XAF" },
    { name: "Chilean Peso", symbol: "$", ISO: "CLP" },
    { name: "Chinese Yuan", symbol: "¥", ISO: "CNY" },
    { name: "Colombian Peso", symbol: "$", ISO: "COP" },
    { name: "Comorian Franc", symbol: "Fr", ISO: "KMF" },
    { name: "Congolese Franc", symbol: "Fr", ISO: "CDF" },
    { name: "Costa Rican Colón", symbol: "₡", ISO: "CRC" },
    { name: "Croatian Kuna", symbol: "kn", ISO: "HRK" },
    { name: "Cuban Peso", symbol: "$", ISO: "CUP" },
    { name: "Czech Koruna", symbol: "Kč", ISO: "CZK" },
    { name: "Danish Krone", symbol: "kr", ISO: "DKK" },
    { name: "Djiboutian Franc", symbol: "Fr", ISO: "DJF" },
    { name: "Dominican Peso", symbol: "$", ISO: "DOP" },
    { name: "East Caribbean Dollar", symbol: "$", ISO: "XCD" },
    { name: "Egyptian Pound", symbol: "£", ISO: "EGP" },
    { name: "Eritrean Nakfa", symbol: "Nfk", ISO: "ERN" },
    { name: "Ethiopian Birr", symbol: "Br", ISO: "ETB" },
    { name: "Euro", symbol: "€", ISO: "EUR" },
    { name: "Falkland Islands Pound", symbol: "£", ISO: "FKP" },
    { name: "Fijian Dollar", symbol: "$", ISO: "FJD" },
    { name: "Gambian Dalasi", symbol: "D", ISO: "GMD" },
    { name: "Georgian Lari", symbol: "₾", ISO: "GEL" },
    { name: "Ghanaian Cedi", symbol: "₵", ISO: "GHS" },
    { name: "Gibraltar Pound", symbol: "£", ISO: "GIP" },
    { name: "Guatemalan Quetzal", symbol: "Q", ISO: "GTQ" },
    { name: "Guinean Franc", symbol: "Fr", ISO: "GNF" },
    { name: "Guyanese Dollar", symbol: "$", ISO: "GYD" },
    { name: "Haitian Gourde", symbol: "G", ISO: "HTG" },
    { name: "Honduran Lempira", symbol: "L", ISO: "HNL" },
    { name: "Hong Kong Dollar", symbol: "$", ISO: "HKD" },
    { name: "Hungarian Forint", symbol: "Ft", ISO: "HUF" },
    { name: "Icelandic Króna", symbol: "kr", ISO: "ISK" },
    { name: "Indian Rupee", symbol: "₹", ISO: "INR" },
    { name: "Indonesian Rupiah", symbol: "Rp", ISO: "IDR" },
    { name: "Iranian Rial", symbol: "﷼", ISO: "IRR" },
    { name: "Iraqi Dinar", symbol: "ع.د", ISO: "IQD" },
    { name: "Israeli New Shekel", symbol: "₪", ISO: "ILS" },
    { name: "Jamaican Dollar", symbol: "$", ISO: "JMD" },
    { name: "Japanese Yen", symbol: "¥", ISO: "JPY" },
    { name: "Jordanian Dinar", symbol: "د.ا", ISO: "JOD" },
    { name: "Kazakhstani Tenge", symbol: "₸", ISO: "KZT" },
    { name: "Kenyan Shilling", symbol: "KSh", ISO: "KES" },
    { name: "Kuwaiti Dinar", symbol: "د.ك", ISO: "KWD" },
    { name: "Kyrgyzstani Som", symbol: "с", ISO: "KGS" },
    { name: "Lao Kip", symbol: "₭", ISO: "LAK" },
    { name: "Lebanese Pound", symbol: "ل.ل", ISO: "LBP" },
    { name: "Lesotho Loti", symbol: "L", ISO: "LSL" },
    { name: "Liberian Dollar", symbol: "$", ISO: "LRD" },
    { name: "Libyan Dinar", symbol: "ل.د", ISO: "LYD" },
    { name: "Macanese Pataca", symbol: "P", ISO: "MOP" },
    { name: "Malagasy Ariary", symbol: "Ar", ISO: "MGA" },
    { name: "Malawian Kwacha", symbol: "MK", ISO: "MWK" },
    { name: "Malaysian Ringgit", symbol: "RM", ISO: "MYR" },
    { name: "Maldivian Rufiyaa", symbol: "Rf", ISO: "MVR" },
    { name: "Mauritian Rupee", symbol: "₨", ISO: "MUR" },
    { name: "Mexican Peso", symbol: "$", ISO: "MXN" },
    { name: "Moldovan Leu", symbol: "L", ISO: "MDL" },
    { name: "Mongolian Tögrög", symbol: "₮", ISO: "MNT" },
    { name: "Moroccan Dirham", symbol: "د.م.", ISO: "MAD" },
    { name: "Mozambican Metical", symbol: "MT", ISO: "MZN" },
    { name: "Myanmar Kyat", symbol: "Ks", ISO: "MMK" },
    { name: "Namibian Dollar", symbol: "$", ISO: "NAD" },
    { name: "Nepalese Rupee", symbol: "₨", ISO: "NPR" },
    { name: "New Taiwan Dollar", symbol: "NT$", ISO: "TWD" },
    { name: "New Zealand Dollar", symbol: "$", ISO: "NZD" },
    { name: "Nicaraguan Córdoba", symbol: "C$", ISO: "NIO" },
    { name: "Nigerian Naira", symbol: "₦", ISO: "NGN" },
    { name: "North Korean Won", symbol: "₩", ISO: "KPW" },
    { name: "Norwegian Krone", symbol: "kr", ISO: "NOK" },
    { name: "Omani Rial", symbol: "ر.ع.", ISO: "OMR" },
    { name: "Pakistani Rupee", symbol: "₨", ISO: "PKR" },
    { name: "Panamanian Balboa", symbol: "B/.", ISO: "PAB" },
    { name: "Papua New Guinean Kina", symbol: "K", ISO: "PGK" },
    { name: "Paraguayan Guaraní", symbol: "₲", ISO: "PYG" },
    { name: "Peruvian Sol", symbol: "S/", ISO: "PEN" },
    { name: "Philippine Peso", symbol: "₱", ISO: "PHP" },
    { name: "Polish Złoty", symbol: "zł", ISO: "PLN" },
    { name: "Qatari Riyal", symbol: "ر.ق", ISO: "QAR" },
    { name: "Romanian Leu", symbol: "lei", ISO: "RON" },
    { name: "Russian Ruble", symbol: "₽", ISO: "RUB" },
    { name: "Rwandan Franc", symbol: "Fr", ISO: "RWF" },
    { name: "Saint Helena Pound", symbol: "£", ISO: "SHP" },
    { name: "Samoan Tālā", symbol: "T", ISO: "WST" },
    { name: "Saudi Riyal", symbol: "ر.س", ISO: "SAR" },
    { name: "Serbian Dinar", symbol: "дин.", ISO: "RSD" },
    { name: "Seychellois Rupee", symbol: "₨", ISO: "SCR" },
    { name: "Singapore Dollar", symbol: "$", ISO: "SGD" },
    { name: "Solomon Islands Dollar", symbol: "$", ISO: "SBD" },
    { name: "Somali Shilling", symbol: "Sh", ISO: "SOS" },
    { name: "South African Rand", symbol: "R", ISO: "ZAR" },
    { name: "South Korean Won", symbol: "₩", ISO: "KRW" },
    { name: "Sri Lankan Rupee", symbol: "₨", ISO: "LKR" },
    { name: "Sudanese Pound", symbol: "ج.س.", ISO: "SDG" },
    { name: "Surinamese Dollar", symbol: "$", ISO: "SRD" },
    { name: "Swazi Lilangeni", symbol: "L", ISO: "SZL" },
    { name: "Swedish Krona", symbol: "kr", ISO: "SEK" },
    { name: "Swiss Franc", symbol: "CHF", ISO: "CHF" },
    { name: "Syrian Pound", symbol: "£", ISO: "SYP" },
    { name: "Tajikistani Somoni", symbol: "ЅМ", ISO: "TJS" },
    { name: "Tanzanian Shilling", symbol: "Sh", ISO: "TZS" },
    { name: "Thai Baht", symbol: "฿", ISO: "THB" },
    { name: "Tongan Paʻanga", symbol: "T$", ISO: "TOP" },
    { name: "Trinidad and Tobago Dollar", symbol: "$", ISO: "TTD" },
    { name: "Tunisian Dinar", symbol: "د.ت", ISO: "TND" },
    { name: "Turkish Lira", symbol: "₺", ISO: "TRY" },
    { name: "Turkmenistan Manat", symbol: "T", ISO: "TMT" },
    { name: "Ugandan Shilling", symbol: "Sh", ISO: "UGX" },
    { name: "Ukrainian Hryvnia", symbol: "₴", ISO: "UAH" },
    { name: "United Arab Emirates Dirham", symbol: "د.إ", ISO: "AED" },
    { name: "United States Dollar", symbol: "$", ISO: "USD" },
    { name: "Uruguayan Peso", symbol: "$", ISO: "UYU" },
    { name: "Uzbekistani So'm", symbol: "so'm", ISO: "UZS" },
    { name: "Vanuatu Vatu", symbol: "Vt", ISO: "VUV" },
    { name: "Venezuelan Bolívar", symbol: "Bs.", ISO: "VES" },
    { name: "Vietnamese Đồng", symbol: "₫", ISO: "VND" },
    { name: "West African CFA franc", symbol: "Fr", ISO: "XOF" },
    { name: "Yemeni Rial", symbol: "﷼", ISO: "YER" },
    { name: "Zambian Kwacha", symbol: "ZK", ISO: "ZMW" }
];
const currenciesArray: currencyType[] = [
    { name: "Argentine peso", symbol: "$", ISO: "ARS" },
    { name: "Australian dollar", symbol: "$", ISO: "AUD" },
    { name: "Brazilian real", symbol: "R$", ISO: "BRL" },
    { name: "British pound", symbol: "£", ISO: "GBP" },
    { name: "Canadian dollar", symbol: "$", ISO: "CAD" },
    { name: "Chinese yuan", symbol: "¥", ISO: "CNY" },
    { name: "Euro", symbol: "€", ISO: "EUR" },
    { name: "Indian rupee", symbol: "₹", ISO: "INR" },
    { name: "Israeli new shekel", symbol: "₪", ISO: "ILS" },
    { name: "Japanese yen", symbol: "¥", ISO: "JPY" },
    { name: "Mexican peso", symbol: "$", ISO: "MXN" },
    { name: "Russian ruble", symbol: "₽", ISO: "RUB" },
    { name: "South African rand", symbol: "R", ISO: "ZAR" },
    { name: "South Korean won", symbol: "₩", ISO: "KRW" },
    { name: "Swiss franc", symbol: "CHF", ISO: "CHF" },
    { name: "Turkish lira", symbol: "₺", ISO: "TRY" },
    { name: "United States dollar", symbol: "$", ISO: "USD" }
];


export { currenciesArray };