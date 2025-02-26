// React and modules imports
// https://react-icons.github.io/react-icons/
import {
    MdNavigateNext,
    MdKeyboardBackspace,
    MdOutlineSettings,
    MdShare,
    MdOutlineDeleteForever,
    MdAdd,
    MdArrowDropDown,
    MdBalance,
    MdOutlineWaterDrop,
    MdFilter4
} from "react-icons/md";
import { IconProps } from "../types";
import { ThemedIcon } from "../components";

const IconNext = (props: IconProps) => <ThemedIcon icon={MdNavigateNext} color={props?.color} size={props?.size}
                                                   rtlIgnore={props?.rtlIgnore} />;
const IconBack = (props: IconProps) => <ThemedIcon icon={MdKeyboardBackspace} color={props?.color}
                                                   rtlIgnore={props?.rtlIgnore} size={props?.size} />;
const IconSettings = (props: IconProps) => <ThemedIcon icon={MdOutlineSettings} color={props?.color}
                                                       rtlIgnore={props?.rtlIgnore} size={props?.size} />;
const IconShare = (props: IconProps) => <ThemedIcon icon={MdShare} color={props?.color} rtlIgnore={props?.rtlIgnore}
                                                    size={props?.size} />;
const IconDelete = (props: IconProps) => <ThemedIcon icon={MdOutlineDeleteForever} color={props?.color}
                                                     rtlIgnore={props?.rtlIgnore}
                                                     size={props?.size} />;
const IconAdd = (props: IconProps) => <ThemedIcon icon={MdAdd} color={props?.color}
                                                  rtlIgnore={props?.rtlIgnore}
                                                  size={props?.size} />;
const IconServices = (props: IconProps) => <ThemedIcon icon={MdArrowDropDown} color={props?.color}
                                                       rtlIgnore={props?.rtlIgnore}
                                                       size={props?.size} />;

const IconWeight = (props: IconProps) => <ThemedIcon icon={MdBalance} color={props?.color}
                                                     rtlIgnore={props?.rtlIgnore}
                                                     size={props?.size} />;

const IconLiquid = (props: IconProps) => <ThemedIcon icon={MdOutlineWaterDrop} color={props?.color}
                                                     rtlIgnore={props?.rtlIgnore}
                                                     size={props?.size} />;

const IconQuantity = (props: IconProps) => <ThemedIcon icon={MdFilter4} color={props?.color}
                                                       rtlIgnore={props?.rtlIgnore}
                                                       size={props?.size} />;


export {
    IconNext,
    IconBack,
    IconSettings,
    IconShare,
    IconDelete,
    IconAdd,
    IconServices,
    IconWeight,
    IconLiquid,
    IconQuantity
};