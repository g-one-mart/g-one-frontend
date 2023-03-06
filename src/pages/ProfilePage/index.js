import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/protectedApi";

const Component = () => {
  const [profile, setProfile] = useState();
  const getProfile = async () => {
    const { data } = await fetchProfile();
    return setProfile(data.user);
  };
  useEffect(() => {
    getProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;
  const { fullName, email, profilePhoto, gender, contactNumber, address } =
    profile;
  return (
    <div>
      <div className="profile-head">
        <div>Hello {fullName}</div>
        <img src={profilePhoto} alt="profile" />
      </div>
      <div className="profile-info">
        <div className="sub-head">
          <span>Personal Information</span>
        </div>
        <span>{fullName}</span>
        <span>gender: {gender && gender}</span>
        <div className="sub-head">
          <span>Email Address</span>
        </div>
        <span>{email}</span>
        <div className="sub-head">
          <span>Mobile Number</span>
        </div>
        {contactNumber && <span>{contactNumber}</span>}
      </div>
    </div>
  );
};

export default Component;
