import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Description,
  Avatar,
  Name,
  Text,
  Stats,
  StatsItem,
  SpanLabel,
  SpanQuantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileDiv>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>
      <Stats>
        <StatsItem>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity> {stats.followers}</SpanQuantity>
        </StatsItem>
        <StatsItem>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity> {stats.views}</SpanQuantity>
        </StatsItem>
        <StatsItem>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity> {stats.likes}</SpanQuantity>
        </StatsItem>
      </Stats>
    </ProfileDiv>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
