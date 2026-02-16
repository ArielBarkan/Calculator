import { getCurrencySymbolByISO } from "../../utils";
import { useEffect, useState } from "react";
import { FadeInText } from "../animations";

type pricePerDisplayProps = {
    priceUnified?: number;
};

const PricePerDisplay = (props: pricePerDisplayProps) => {
    const { priceUnified } = props;
    const [isVisible, setIsVisible] = useState(false);
    const currencySymbol = getCurrencySymbolByISO();
    const displayPrice = priceUnified ? `${currencySymbol}${priceUnified}` : "";

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 500);
    }, [priceUnified]);

    return (
        <FadeInText isVisible={isVisible}>
            <p style={{ textAlign: "center" }}>{displayPrice || "-"}</p>
        </FadeInText>
    );
};

export { PricePerDisplay };
