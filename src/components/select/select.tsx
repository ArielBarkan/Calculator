// Modules imports
import Select from "react-select";
import { selectType } from "../../types";

// Custom imports

type selectComponentProps = {
    options: selectType[]
}
const SelectComponent = (props: selectComponentProps) => {
    return (
        <Select
            options={props.options}
            isSearchable={true}
        />
    );
};
export { SelectComponent };