import { PropTypes } from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { FriendItem } from './FriendItem';

export const FriendList = ({ friends }) => {
    return (
        <div>
            <ul className={css.friendList}>
                {friends.map(friend => (
                    <FriendItem
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        </div>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};
