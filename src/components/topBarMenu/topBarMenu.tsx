// React imports
import { useEffect, useState } from "react";
// Modules imports
import { useLocation, useNavigate } from "react-router-dom";
// Custom imports
import { IconSettings } from "../../styles";
import { Navbar, MenuIcon } from "./topBarMenuWrappers";

const TopBarMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const settingBaseRoute: string = "/settings";

    // TODO : complete the isSelected for displaing the icon as "selected" if the user is in "/settings" route
    const [isSelected, setIsSelected] = useState<boolean>(false);

    useEffect(() => {
        console.log(location.pathname);
        setIsSelected(location.pathname.startsWith(settingBaseRoute));

    }, [location.pathname]);

    return (
        <Navbar>
            <MenuIcon onClick={() => navigate(settingBaseRoute)}>
                <IconSettings size={30} />
            </MenuIcon>
        </Navbar>
    );
};
export { TopBarMenu };