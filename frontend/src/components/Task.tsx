import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

type TaskProps = {
  title: string;
};

const Task: React.FC<TaskProps> = ({ title }) => {
  const handleOpenDetail = () => {
    alert('open detail');
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('delete task');
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('edit task');
  };

  return (
    <div
      className='p-4 my-4 mx-auto rounded-md shadow-md w-1/2 hover:bg-gray-100 hover:cursor-pointer flex justify-between'
      onClick={handleOpenDetail}
    >
      <p>{title}</p>
      <div>
        <EditIcon className='mr-2 hover:opacity-50' onClick={handleEdit} />
        <DeleteIcon
          className='text-red-500 hover:opacity-50'
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default Task;
