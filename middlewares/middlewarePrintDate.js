export const printDate = (req, res, next) => {
    if (req.method === 'GET') {
        console.log("current date is: ", req.currentDate.toLocaleString());
    }
    next();
};