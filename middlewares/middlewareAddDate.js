export const addCurrentDate = (req, res, next) => {
    req.currentDate = new Date();
    next();
}
