// Modules imports
// https://react-icons.github.io/react-icons/
import { MdNavigateNext, MdKeyboardBackspace, MdOutlineSettings, MdShare } from "react-icons/md";


// Custom imports
import { IconProps } from "../types";
import { ThemedIcon } from "../components/themedIcon/themedIcon";

const IconNext = (props: IconProps) => <ThemedIcon icon={MdNavigateNext} color={props?.color}
                                                   rtlIgnore={props?.rtlIgnore}
                                                   size={props?.size} />;
const IconBack = (props: IconProps) => <ThemedIcon icon={MdKeyboardBackspace} color={props?.color}
                                                   rtlIgnore={props?.rtlIgnore}
                                                   size={props?.size} />;
const IconSettings = (props: IconProps) => <ThemedIcon icon={MdOutlineSettings} color={props?.color}
                                                       rtlIgnore={props?.rtlIgnore}
                                                       size={props?.size} />;
const IconShare = (props: IconProps) => <ThemedIcon icon={MdShare} color={props?.color} rtlIgnore={props?.rtlIgnore}
                                                    size={props?.size} />;


export { IconNext, IconBack, IconSettings, IconShare };