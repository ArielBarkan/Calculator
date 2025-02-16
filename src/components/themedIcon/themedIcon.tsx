import { useTheme } from "styled-components";
import { ThemedIconProps } from "../../types";


const ThemedIcon: React.FC<ThemedIconProps> = ({ icon: Icon, color, size = 24 }) => {
    const theme = useTheme();
    const resolvedColor = color || theme?.icons?.iconDefaultColor || "black";
    const resolvedSize = size || `${size}px` || "20px";


    return <Icon color={resolvedColor} size={resolvedSize} className="flippable-icon" />;
};

export { ThemedIcon };
