export const blockServer = (req, res, next) => {
const day = req.currentDate.getDay(); // 5 for Friday, 6 for Saturday
const hours = req.currentDate.getHours();

if ((day === 5 && hours >= 12) || (day === 6 && hours < 22)) {
    return res.status(418).json({ message: 'Blocked due to time restrictions!' });
}
    next();
}