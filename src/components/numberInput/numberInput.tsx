import { NumberInputStyled } from "./numberInputWrappers";

export type InputCompProps = {
    value?: string
}
const NumberInput = (props: InputCompProps) => {

    const { value } = props;
    return (<NumberInputStyled value={value} />);

};

export { NumberInput };