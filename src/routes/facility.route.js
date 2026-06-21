import { Router } from 'express';

const facilityRoute = Router();

facilityRoute.get('/facilities', (req, res) =>
    res.status(200).json({ success: true, message: 'GET -> All facilities' })
);

facilityRoute.get('/facilities/:id', (req, res) =>
    res.status(200).json({ success: true, message: 'GET -> Specific facility' })
);

facilityRoute.post('/facilities', (req, res) =>
    res.status(200).json({ success: true, message: 'POST -> Create facility' })
);

facilityRoute.patch('/facilities/:id', (req, res) =>
    res.status(200).json({ success: true, message: 'PATCH -> Update facility' })
);

facilityRoute.delete('/facilities/:id', (req, res) =>
    res.status(200).json({ success: true, message: 'DELETE -> Delete facility' })
);

export default facilityRoute;
