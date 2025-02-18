// React imports
import { useEffect, useState } from "react";
// Modules imports
import { useLocation, useNavigate } from "react-router-dom";
// Custom imports
import { IconSettings } from "../../styles";
import { Navbar } from "./topBarMenuWrappers";
import { UnstyledButton } from "../buttonUnstyled";

const TopBarMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const settingBaseRoute: string = "/settings";
    
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        console.log(location.pathname);
        setIsSelected(location.pathname.startsWith(settingBaseRoute));

    }, [location.pathname]);

    return (
        <Navbar>
            <UnstyledButton onClick={() => navigate(settingBaseRoute)} selected={isSelected}>
                <IconSettings size={30} />
            </UnstyledButton>
        </Navbar>
    );
};
export { TopBarMenu };