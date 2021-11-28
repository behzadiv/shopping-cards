import { useAuth } from "../provider/AuthProvider";
import styles from "./Profile.module.css";
const Profile = () => {
  const { name, email, phoneNumber } = useAuth();

  return (
    <div className="container">
      <table className={styles.table} border="1px">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>PhonNumber</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
        </tr>
      </table>
    </div>
  );
};

export default Profile;
