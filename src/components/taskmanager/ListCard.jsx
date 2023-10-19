/* eslint-disable react/prop-types */
import './listcard.scss';
import { BiChevronLeft, BiChevronRight, BiTrash } from 'react-icons/bi';
import { arrowClick, deleteItem } from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
const ListCard = (items) => {
	const { item } = items;
	const dispatch = useDispatch();
  
	const ArrowClick = (string) => {
	  dispatch(arrowClick(item, string));
	};
	const handleDelete = () => {
	  dispatch(deleteItem(item._id));
	};
  
	const getStatusStyles = (status) => {
	  switch (status) {
		case 'backlog':
		  return 'backlog';
		case 'doing':
		  return 'doing';
		case 'todo':
		  return 'todo';
		case 'done':
		  return 'completed';
		default:
		  return '';
	  }
	};
  
	return (
	  <div>
		<ul className={`menu ${getStatusStyles(item.status)}`}>
		  <li>
			<p>{item._id}</p>
		  </li>
		  <li>
			<p>{item.task}</p>
		  </li>
		  <li>
			<p>{item.status}</p>
		  </li>
		  <li className="list-card-button">
			<button
			  disabled={item.status === 'backlog'}
			  onClick={() => ArrowClick('left')}
			>
			  <BiChevronLeft />
			</button>
			<button
			  disabled={item.status === 'done'}
			  onClick={() => ArrowClick('right')}
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
  