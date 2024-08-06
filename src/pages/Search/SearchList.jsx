import PropTypes from 'prop-types';

const ListComponent = ({ type, items, handleResultClick }) => {
  const renderItems = () => {
    let currentItems = [];

    switch (type) {
      case 'news':
        currentItems = items.news || [];
        break;
      case 'training-fields':
        currentItems = items.trainingFields || [];
        break;
      case 'event':
        currentItems = items.events || [];
        break;
      default:
        break;
    }

    return currentItems.length > 0 ? (
      currentItems.map((item, index) => (
        <div className="flex justify-start items-center w-full p-2 gap-2"
          key={index}
          onClick={() => handleResultClick(item)}>
          <p className='font-semibold hover:text-red-400 cursor-pointer'>{item.title}</p>
        </div>
      ))
    ) : (
      <div>
        <p>No results found.</p>
      </div>
    );
  };

  return (
    <ul>
      {renderItems()}
    </ul>
  );
};

export default ListComponent;

ListComponent.propTypes = {
  type: PropTypes.string,
  items: PropTypes.object,
  handleResultClick: PropTypes.func
};
