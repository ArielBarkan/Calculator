// Modules imports
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ShareButton } from "../shareButton";


const Header: React.FC = () => {
    const { t: translate } = useTranslation("common");
    // TODO: ADD "SHARE" BUTTON PLEASE
    return (
        <nav>
            <Link to="/">{translate("common:header.linkLabels.main")}</Link>

            |

            <Link to="/about">{translate("common:header.linkLabels.about")}</Link>

            |

            <Link to="/settings">{translate("common:header.linkLabels.settings")}</Link>
            |
            <ShareButton />
        </nav>
    );
};

export { Header };
