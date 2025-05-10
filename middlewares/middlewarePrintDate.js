export const printDate = (req, res, next) => {
    if (req.method === 'GET') {
        console.log("current date is: ", req.cuurrentDate);
    }
    next();
};