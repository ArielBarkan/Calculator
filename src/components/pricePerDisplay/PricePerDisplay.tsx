type pricePerDisplayProps = {
    priceUnified?: number
}


const PricePerDisplay = (props: pricePerDisplayProps) => {

    const { priceUnified } = props;


    return (<p>{priceUnified}</p>);

};

export { PricePerDisplay };