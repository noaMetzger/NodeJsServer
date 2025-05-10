export const blockServer = (req, res, next) => {
const currentDate = new Date(req.currentDate); // Parsing the date string from req.currentDate
const day = currentDate.getDay(); // 5 for Friday, 6 for Saturday
const hours = currentDate.getHours();

if ((day === 5 && hours >= 12) || (day === 6 && hours < 22)) {
    return res.status(418).json({ message: 'Blocked due to time restrictions!' });
}
    next();
}