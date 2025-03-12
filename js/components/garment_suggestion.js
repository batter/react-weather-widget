import suggestGarment from './../utils/suggest_garment';

const GarmentSuggestion = (props) => {
  if (props.temperature !== undefined) {
    return (
      <div className='garment-suggestion'>
        {suggestGarment(props.temperature, props.activity)}
      </div>
    );
  } else {
    return null;
  }
};

export default GarmentSuggestion;
