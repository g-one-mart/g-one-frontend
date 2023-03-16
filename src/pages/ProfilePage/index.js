import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/protectedApi";
import { useAuthContext } from "../../hooks/useAuthContext";

const Component = () => {
  const [profile, setProfile] = useState();
  const { loading } = useAuthContext();
  useEffect(() => {
    return async () => {
      if (!loading) {
        const { data } = await fetchProfile();
        setProfile(data.user);
      }
    };
  }, [loading]);

  if (!profile) return <div>Loading...</div>;
  const { fullName, email, profilePhoto, gender, contactNumber } = profile;
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
