export type MedalType = {
    rank: number;
    size: number
};

const Medal = (props: MedalType) => {

    const { rank, size } = props;
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
        <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Medal Circle */}
            <circle cx="50" cy="50" r="30" fill={color} stroke={rank === 0 || rank > 3 ? color : "black"}
                    strokeWidth="3" />

            {/* Place Number */}
            <text x="50%" y="65%" fontSize="40" fill="black" textAnchor="middle"
                  fontWeight="bold">
                {rank}
            </text>
        </svg>
    );
};

export { Medal };
