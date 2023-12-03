import "./listcard.scss";
import { BiChevronLeft, BiChevronRight, BiTrash } from "react-icons/bi";
import { arrowClick, deleteItem } from "../../redux/taskSlice";
import { useDispatch ,useSelector} from "react-redux";

const ListCard = ({ item }) => {
  // Destructure the 'item' prop
  const dispatch = useDispatch();

  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser, token } = auth;
  const ArrowClick = (string) => {
    dispatch(arrowClick(item, string,currentUser.id));
  };
  const handleDelete = () => {
    dispatch(deleteItem(item._id));
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "backlog":
        return "backlog";
      case "doing":
        return "doing";
      case "todo":
        return "todo";
      case "done":
        return "completed";
      default:
        return "";
    }
  };
  const getDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Note: Months are 0-based, so we add 1
    const day = date.getDate();

    // Create a string in the format "YYYY-MM-DD"
    const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;

    return (formattedDate);
  };

  return (
    <div>
      <ul className={`menu ${getStatusStyles(item.status)}`}>
        {/* <li>
          <p>{item._id}</p>
        </li> */}
        <li>
          <p>{item.task}</p>
        </li>
        
        <li>
          <p>{getDate(item.deadline)}</p>
        </li>
        <li>
          <p>{item?.assignee?.username}</p>
        </li>
        <li>
          <p>{item?.createdBy?.username}</p>
        </li>
        <li>
          <p>{item?.lastModifiedBy?.username}</p>
        </li>
        <li>
          <p>{item.status}</p>
        </li>
        <li className="list-card-button">
          <button
            disabled={item.status === "backlog"}
            onClick={() => ArrowClick("left")}
          >
            <BiChevronLeft />
          </button>
          <button
            disabled={item.status === "done"}
            onClick={() => ArrowClick("right")}
          >
            <BiChevronRight />
          </button>
          <button onClick={handleDelete}>
            <BiTrash />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ListCard;
