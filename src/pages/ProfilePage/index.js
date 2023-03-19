import { useEffect, useState } from "react";
import { fetchProfile } from "../../api/protectedApi";
import { useAuthContext } from "../../hooks/useAuthContext";
import "./index.css";

const ProfilePage = () => {
  
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
    <div className="container-fluid">
      <div className="profile-head">
          Hello, {fullName}
      </div>
      <div className="profile-info">
          <div>
                <img src={profilePhoto} className="profilephoto" alt={fullName}  />
          </div>
          <div className="profilepi">
                <h2 className="pihead">
                  Personal Information
                </h2>
                <h3 className="piname">
                  {fullName}
                </h3>
                <p className="pigender">
                    Gender: {gender && gender}
                </p>
                <h5 className="piemailhead">
                  Email Address
                </h5>
                <p className="piemail">
                  {email}
                </p>
                <h5 className="pinumhead">
                  Mobile Number
                </h5>
                <p className="pinumber">
                  {contactNumber && <span>{contactNumber}</span>}
                </p>
          </div>
      </div>
    </div>
  );
};

export default ProfilePage;