// Modules imports
import Select from "react-select";
import { selectType } from "../../types";

// Custom imports

type selectComponentProps = {
    options: selectType[]
    returnFunction?: (selectedValue: string) => void;
    currentValue?: string;
    isSearchable?: boolean;
}
const SelectComponent = (props: selectComponentProps) => {

    const returnToParent = (selectedOption: selectType | null) => {
        if (selectedOption && props.returnFunction) {
            props.returnFunction(selectedOption.value); // Assuming `value` exists in `selectType`
        }
    };

    const getCurrentSelectedOption = (): selectType | undefined => {

        return props.options.find(option => option.value === props.currentValue);
    };

    return (
        <Select
            options={props.options}
            isSearchable={!!props.isSearchable}
            onChange={returnToParent}
            defaultValue={getCurrentSelectedOption()}
        />
    );
};
export { SelectComponent };