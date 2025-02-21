import { Input } from "./inputWrappers";

export type InputCompProps = {
    value?: string
}
const InputComp = (props: InputCompProps) => {

    const { value } = props;
    return (<Input value={value} />);

};

export { InputComp };