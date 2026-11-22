export const MAX_TRAVELLERS = 6;
export const DEPOSIT_RATE = 0.30;

export function checkCapacity(travellers, remainingSeats) {
  if (!Number.isInteger(travellers) || travellers < 1) return { ok:false, message:'Choose at least one traveller.' };
  if (travellers > MAX_TRAVELLERS) return { ok:false, message:'A booking can include no more than 6 travellers.' };
  if (travellers > remainingSeats) return { ok:false, message:`Only ${remainingSeats} places remain for this trip.` };
  return { ok:true, message:'' };
}

export function checkEligibility(trip, fitnessConfirmed) {
  if (trip.difficulty === 'Challenging' && !fitnessConfirmed) {
    return { ok:false, message:'Please confirm that you are prepared for a challenging mountain trek.' };
  }
  return { ok:true, message:'' };
}

export function calculatePayment(total) {
  const deposit = Math.round(total * DEPOSIT_RATE);
  return { total, deposit, balance: total - deposit };
}

export function validateBooking(form, trip, travellers) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = 'Enter your full name (at least 2 characters).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email address.';
  if (!form.departure) errors.departure = 'Choose a preferred departure date.';
  if (form.departure && new Date(form.departure + 'T00:00:00') <= new Date(new Date().toDateString())) errors.departure = 'Choose a future date.';
  const capacity = checkCapacity(travellers, trip.capacity);
  if (!capacity.ok) errors.travellers = capacity.message;
  const eligibility = checkEligibility(trip, form.fitnessConfirmed);
  if (!eligibility.ok) errors.fitnessConfirmed = eligibility.message;
  return errors;
}