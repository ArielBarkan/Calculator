import { useEffect, useState } from "react";
import { useTheme } from "styled-components";

import { RankWrapper, Rank } from "./rankDisplayWrappers";
import { FadeInText } from "../animations";


export type RankDisplayProps = {
    rank: number;
    dimension: number
}
const RankDisplay = (props: RankDisplayProps) => {
    const { rank, dimension } = props;
    const [isVisible, setIsVisible] = useState(false);

    const theme = useTheme();
    let color: string;
    switch (rank) {
        case 1:
            color = theme.rank.goldMedal.bgColor;
            break;
        case 2:
            color = theme.rank.silverMedal.bgColor;
            break;
        case 3:
            color = theme.rank.bronzeMedal.bgColor;
            break;
        default:
            color = "transparent";
    }
    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 500);

    }, [rank]);

    return (
        <FadeInText isVisible={isVisible}>
            <RankWrapper {...{ color }} $dimension={dimension}>
                <Rank>{rank}</Rank>
            </RankWrapper>
        </FadeInText>
    );
};

export { RankDisplay };