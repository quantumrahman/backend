import mongoose from 'mongoose';

const facilitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        facility_type: {
            type: String,
            required: true,
            enum: [
                'Football Turf',
                'Badminton Court',
                'Tennis Court',
                'Swimming Pool',
                'Basketball Court',
            ],
        },
        facility_image: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        price_per_hour: {
            type: Number,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        available_time_slots: [
            {
                type: String,
                required: true,
            },
        ],
        description: {
            type: String,
            required: true,
            trim: true,
        },
        owner_email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
    },
    { timestamps: true, versionKey: true }
);

const Facility = mongoose.model('Facility', facilitySchema);

export default Facility;
