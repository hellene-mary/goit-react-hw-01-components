import { PropTypes } from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ stats }) => {
    const { title } = stats;
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <ul className={css.statList}>
                {stats.map(data => (
                    <StatisticsItem key={data.id} data={data} />
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
        })
    ),
};
