// Custom imports
import { SwitchWrapper, HiddenCheckbox, Slider } from "./toggleSwitch.wrappers";
import { ToggleSwitchProps } from "../../types";


const ToggleSwitch = (props: ToggleSwitchProps) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        props.returnFunction();
    };
    return (
        <SwitchWrapper>
            <HiddenCheckbox checked={props.checked} onChange={handleInputChange} id={props?.id} />
            <Slider />
        </SwitchWrapper>
    );

};

export { ToggleSwitch };