import { SwitchWrapper, HiddenCheckbox, Slider } from "./toggleWrappers";
import { ToggleSwitchProps } from "../../types";


const ToggleSwitch = (props: ToggleSwitchProps) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        props.returnFunction(e.target.checked);
    };
    return (
        <SwitchWrapper>
            <HiddenCheckbox checked={props.checked} onChange={handleInputChange} />
            <Slider />
        </SwitchWrapper>
    );

};

export { ToggleSwitch };