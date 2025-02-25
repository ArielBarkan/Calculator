// React and modules imports
import Select from "react-select";

// Custom imports
import { SelectComponentProps, selectType } from "../../types";


const SelectComponent = (props: SelectComponentProps) => {

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