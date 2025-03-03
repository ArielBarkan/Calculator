import { getCurrencySymbolByISO } from "../../utils";

type pricePerDisplayProps = {
    priceUnified?: number
}


const PricePerDisplay = (props: pricePerDisplayProps) => {

    const { priceUnified } = props;
    const currencySymbol = getCurrencySymbolByISO();
    const displayPrice = priceUnified ? `${priceUnified}${currencySymbol}` : "";


    return (<p>{displayPrice || "-"}</p>);

};

export { PricePerDisplay };