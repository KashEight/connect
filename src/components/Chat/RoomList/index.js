import React from 'react';
import withUserInfo from '../../Auth/Session/withUserInfo';
import {
    Link,
} from 'react-router-dom';


class RoomList extends React.Component {

    render() {
        return (
            <div>
                {this.props.user_info ? this.props.user_info.room_ids.map((room_id, index) => (
                    <li key={room_id}>
                        <Link to={`/rooms/${room_id}`}>{room_id}</Link>
                    </li>
                )) : null}
            </div>
        )
    }
}

export default withUserInfo(RoomList);