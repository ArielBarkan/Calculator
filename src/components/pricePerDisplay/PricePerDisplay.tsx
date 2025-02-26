type pricePerDisplayProps = {
    priceUnified: string
}


const PricePerDisplay = (props: pricePerDisplayProps) => {

    const { priceUnified } = props;


    return (<p>{priceUnified}</p>);

};

export { PricePerDisplay };