import { RankWrapper, Rank } from "./rankDisplayWrappers";


export type RankDisplayProps = {
    rank: number;
    dimension: number
}
const RankDisplay = (props: RankDisplayProps) => {
    const { rank, dimension } = props;
    let color: string;
    switch (rank) {
        case 1:
            color = "#FFD700";
            break;
        case 2:
            color = "#C0C0C0";
            break;
        case 3:
            color = "#CD7F32";
            break;
        default:
            color = "transparent";
    }

    return (
        <RankWrapper {...{ color }} dimension={dimension}>
            <Rank>{rank}</Rank>
        </RankWrapper>
    );
};

export { RankDisplay };