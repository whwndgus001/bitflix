import React from "react";

const data = {
  jhCho: {
    name: "조중현",
    desc: "저는 망나니 입니다.",
  },
  aaaa: {
    name: "이름 없음",
    desc: "갑자기 기분이 좋지 않네요",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;

  const profile = data[username];
  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }
  return (
    <div>
      <p>
        {username} ({profile.name})
      </p>
      <p>{profile.desc}</p>
    </div>
  );
};

export default Profile;
