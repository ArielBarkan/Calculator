// React and modules imports
import styled from "styled-components";


const SwitchWrapper = styled.label`
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
`;

const HiddenCheckbox = styled.input.attrs((props) => ({
    type: "checkbox",
    id: props.id || "notProvided"
}))`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
        background-color: #2196f3;
    }

    &:focus + span {
        box-shadow: 0 0 1px #2196f3;
    }

    &:checked + span:before {
        transform: translateX(20px);
    }
`;

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 1px;
        bottom: 1px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
    }
`;

export { SwitchWrapper, HiddenCheckbox, Slider };