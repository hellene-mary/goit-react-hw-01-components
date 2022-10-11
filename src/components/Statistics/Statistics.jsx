import { PropTypes } from 'prop-types';
import css from '../Statistics/Statistics.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <ul className={css.statList}>
                {stats.map(data => (
                    <li
                        key={data.id}
                        className={css.item}
                        style={{ backgroundColor: getRandomHexColor() }}
                    >
                        <span className={css.label}>{data.label}</span>
                        <span className={css.percentage}>
                            {data.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};
