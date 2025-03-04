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
    MdFilter4,
    MdRestartAlt,
    MdMenu,
    MdOutlineClose,
    MdQrCode2,
    MdOutlineQuestionMark
} from "react-icons/md";
import { LiaTrophySolid } from "react-icons/lia";

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

const IconRestart = (props: IconProps) => <ThemedIcon icon={MdRestartAlt} color={props?.color}
                                                      rtlIgnore={props?.rtlIgnore}
                                                      size={props?.size} />;

const IconMenu = (props: IconProps) => <ThemedIcon icon={MdMenu} color={props?.color}
                                                   rtlIgnore={props?.rtlIgnore}
                                                   size={props?.size} />;
const IconClose = (props: IconProps) => <ThemedIcon icon={MdOutlineClose} color={props?.color}
                                                    rtlIgnore={props?.rtlIgnore}
                                                    size={props?.size} />;

const IconTrophy = (props: IconProps) => <ThemedIcon icon={LiaTrophySolid} color={props?.color}
                                                     rtlIgnore={props?.rtlIgnore}
                                                     size={props?.size} />;

const IconQR = (props: IconProps) => <ThemedIcon icon={MdQrCode2} color={props?.color}
                                                 rtlIgnore={props?.rtlIgnore}
                                                 size={props?.size} />;

const IconQuestionMark = (props: IconProps) => <ThemedIcon icon={MdOutlineQuestionMark} color={props?.color}
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
    IconQuantity,
    IconRestart,
    IconMenu,
    IconClose,
    IconTrophy,
    IconQR,
    IconQuestionMark
};