import PropTypes from 'prop-types';


export default function Cart({ actor }) {
    return (
        <div>
            <div>
                <li>{actor.name}</li>
            </div>
        </div>
    )
}

Cart.propTypes = {
    actor: PropTypes.object.isRequired
}