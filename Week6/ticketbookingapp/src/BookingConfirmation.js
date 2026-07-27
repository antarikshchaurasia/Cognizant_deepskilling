
function BookingConfirmation({ flight }) {
  if (!flight) {
    return null;
  }

  return (
    <p className="confirmation">
      Ticket booked on {flight.airline} from {flight.from} to {flight.to} at {flight.time}!
    </p>
  );
}

export default BookingConfirmation;
