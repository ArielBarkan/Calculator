// Modules imports
// https://react-icons.github.io/react-icons/
import { MdNavigateNext, MdKeyboardBackspace, MdMenu, MdClose } from "react-icons/md";


// Custom imports
import { IconProps } from "../types";
import { ThemedIcon } from "../components/themedIcon/themedIcon";

const IconNext = (props: IconProps) => <ThemedIcon icon={MdNavigateNext} color={props?.color}
                                                   size={props?.size} />;
const IconBack = (props: IconProps) => <ThemedIcon icon={MdKeyboardBackspace} color={props?.color}
                                                   size={props?.size} />;
const IconHamburger = (props: IconProps) => <ThemedIcon icon={MdMenu} color={props?.color}
                                                        size={props?.size} />;
const IconClose = (props: IconProps) => <ThemedIcon icon={MdClose} color={props?.color}
                                                    size={props?.size} />;


export { IconNext, IconBack, IconHamburger, IconClose };