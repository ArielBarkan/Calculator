// Modules imports
// https://react-icons.github.io/react-icons/
import { MdNavigateNext, MdKeyboardBackspace, MdOutlineSettings } from "react-icons/md";


// Custom imports
import { IconProps } from "../types";
import { ThemedIcon } from "../components/themedIcon/themedIcon";

const IconNext = (props: IconProps) => <ThemedIcon icon={MdNavigateNext} color={props?.color}
                                                   size={props?.size} />;
const IconBack = (props: IconProps) => <ThemedIcon icon={MdKeyboardBackspace} color={props?.color}
                                                   size={props?.size} />;
const IconSettings = (props: IconProps) => <ThemedIcon icon={MdOutlineSettings} color={props?.color}
                                                       size={props?.size} />;


export { IconNext, IconBack, IconSettings };