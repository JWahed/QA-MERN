import PropTypes from 'prop-types';

const PersonInfo = (props) => {

    const { forename, surname, line1, line2, city, postCode } = props;

    return (
        <>
            <p>{forename} {surname}</p>
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{city}</p>
            <p>{postCode}</p>
        </>
    );
};

PersonInfo.propTypes = {
    forename: PropTypes.string,
    surname: PropTypes.string,
    line1: PropTypes.string,
    line2: PropTypes.string,
    city: PropTypes.string,
    postCode: PropTypes.string,
};

export default PersonInfo;
