type UserProfileProps = {
  displayName: string;
  username: string;
  email: string;
  isEmailVerified: boolean;
};

export const UserProfile = ({
  displayName,
  username,
  email,
  isEmailVerified,
}: UserProfileProps) => {
  return (
    <div>
      <div>
        <span>Display Name: {displayName}</span>
      </div>
      <div>
        <span>Username: {username}</span>
      </div>
      <div>
        <span>Email: {email}</span>
      </div>
      <div>
        Verified: {isEmailVerified ? 'Email Verified' : 'Email Not Verified'}
      </div>
    </div>
  );
};
