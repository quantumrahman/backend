import { z } from 'zod';

const facilityValidation = z.object({
    name: z.string().min(1, 'Facility name is required'),
    facility_type: z.enum(
        ['Football Turf', 'Badminton Court', 'Tennis Court', 'Swimming Pool', 'Basketball Court'],
        'Please select a valid facility type'
    ),
    location: z.string().min(1, 'Facility location is required'),
    price_per_hour: z
        .number('Price per hour must be a number')
        .positive('Price per hour must be greater than 0'),
    capacity: z.number('Capacity must be a number').positive('Capacity must be a greater than 0'),
    available_time_slots: z.string().min(1, 'Please add at least one available time slot'),
    description: z.string().min(1, 'Facility description is required'),
    owner_email: z.string().email('Please provide a valid owner email'),
});

export default facilityValidation;
