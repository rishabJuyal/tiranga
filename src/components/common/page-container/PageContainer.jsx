import PropTypes from 'prop-types'

const PageContainer = ({children}) => {
  return <div className="w-full min-h-[80vh] h-fit p-4 pb-24">
    {children}
  </div>;
};

PageContainer.propTypes = {
  children: PropTypes.array,
}

export default PageContainer;
