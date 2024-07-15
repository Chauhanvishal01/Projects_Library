import React, { useState } from "react";
import DummyPersonImg from "../../public/dummyperson.png";

const RandomUser = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const res = await fetch("https://randomuser.me/api");
      if (!res.ok) {
        throw new Error("Netweork response was not ok");
      }
      const data = await res.json();
      setUser(data.results[0]);
    } catch (err) {
      console.log("Error fetching random user:", err);
    }
  };

  return (
    <div className="randomuser">
      {user ? (
        <div>
          <img src={user.picture.large} />
          <div>
            <p>
              First Name : <span>{user.name.first}</span>
            </p>
            <p>
              Last Name : <span>{user.name.last}</span>
            </p>
            <p>
              Email : <span>{user.email}</span>
            </p>
            <p>
              Phone No. : <span>{user.phone}</span>
            </p>
            <p>
              Location : <span>{user.location.street.name}</span>
            </p>
          </div>
          <div>
            <button onClick={fetchUser}>Get Random User</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img src={DummyPersonImg} />
            <p>
              First Name : <span>Mona</span>
            </p>
            <p>
              Last Name : <span>Disuza</span>
            </p>
            <p>
              Email : <span>mona@gmail.com</span>
            </p>
            <p>
              Phone No. : <span>9126478398</span>
            </p>
            <p>
              Location : <span>Mumbai</span>
            </p>
          </div>
          <div>
            <button onClick={fetchUser}>Get Random User</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomUser;
