import { PropTypes } from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsItem = ({ data }) => {
    const { label, percentage } = data;
    return (
        <>
            <li className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>
        </>
    );
};

StatisticsItem.protoType = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
};
