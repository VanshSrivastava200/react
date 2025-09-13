import { ProfileCard } from "./ProfileCArda";

const Profile = () => {
  return (
    <>
      <div>
        <h1>Profile Challenge</h1>
        <ProfileCard
          name="Vansh"
          age={20}
          greeting={
            <div>
              <strong>Hi, have a nice day</strong>
            </div>
          }
        >
          <p>Hobbies:Reading</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
      <div>
        <h1>Profile Challenge</h1>
        <ProfileCard
          name="Vansh"
          age={20}
          greeting={
            <div>
              <strong>Hi, have a nice day</strong>
            </div>
          }
        >
          <p>Hobbies:Reading</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    </>
  );
};



export default Profile;
