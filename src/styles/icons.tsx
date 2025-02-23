// Modules imports
// https://react-icons.github.io/react-icons/
import {
    MdNavigateNext,
    MdKeyboardBackspace,
    MdOutlineSettings,
    MdShare,
    MdOutlineDeleteForever,
    MdOutlineCircle
} from "react-icons/md";

// Custom imports
import { IconProps } from "../types";
import { ThemedIcon } from "../components/themedIcon/themedIcon";

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
const IconCircle = (props: IconProps) => <ThemedIcon icon={MdOutlineCircle} color={props?.color}
                                                     rtlIgnore={props?.rtlIgnore}
                                                     size={props?.size} />;


export { IconNext, IconBack, IconSettings, IconShare, IconDelete, IconCircle };