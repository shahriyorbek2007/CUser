import "./UserList.css";

function UserList({ users, handleDelete }) {
  return (
    <div className="userList">
      <div className="userList-container container">
        {users &&
          users.map((user) => {
            const {
              id,
              imageUrl,
              firstName,
              lastName,
              age,
              from,
              job,
              gender,
            } = user;
            console.log(id);
            return (
              <div key={id} className="card">
                <div className="card-inner">
                  <img src={imageUrl} alt="Rasm" height={150} width={150} />
                  <h3>
                    {firstName},{lastName},{age} age.
                  </h3>
                  <p>From: {from}</p>
                  <p>Job: {job}</p>
                  <p>Gender: {gender}</p>

                  <button onClick={() => handleDelete(id)}>delete</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default UserList;
