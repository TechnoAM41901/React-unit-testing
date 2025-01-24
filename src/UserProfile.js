

//Mocking API 
import React, { useEffect, useState } from 'react';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    };
    fetchUser();
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return <div>{user.firstName}</div>;
};

export default UserProfile;