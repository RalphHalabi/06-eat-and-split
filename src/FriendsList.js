import Friend from "./Friend";

export default function FriendsList({
  friends,
  onDeleteFriend,
  onSelection,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          onDeleteFriend={onDeleteFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}
