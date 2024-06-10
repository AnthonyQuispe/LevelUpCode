import "./followButton.scss";
import Button from "../button/button";
import PropTypes from "prop-types";

export default function FollowButton({ isFollowing, onFollow, onUnfollow }) {
  return (
    <section className="follow">
      {isFollowing ? (
        <Button text="Unfollow" className="button-red" onClick={onUnfollow} />
      ) : (
        <Button text="Follow" className="button-green" onClick={onFollow} />
      )}
    </section>
  );
}

FollowButton.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  onFollow: PropTypes.func.isRequired,
  onUnfollow: PropTypes.func.isRequired,
};
