import PropTypes from 'prop-types';

const ComponentWithProps = (props) => {

    const { headerProp, contentProp, numberProp, nonexistent } = props;

    return (
        <div>
            <h1> {headerProp} </h1>
            <p> {contentProp} </p>
            <p> {numberProp} </p>
            <p> {nonexistent} howdy </p>
        </div>
    )
};

ComponentWithProps.propTypes = {
    headerProp: PropTypes.string.isRequired,
    contentProp: PropTypes.string.isRequired,
    numberProp: PropTypes.number
}

export default ComponentWithProps;
