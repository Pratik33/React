import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { ChannelContext } from '../Context/ChannelContext';
const UserConsumerB = () => {
    const userName = useContext(UserContext);
    const channelContext = useContext(ChannelContext)
    return (
    <div>
        <>from user userConsumerB ! {userName}  {channelContext}</>
    </div>
    )

}

export default UserConsumerB;