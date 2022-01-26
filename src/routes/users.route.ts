import { NextFunction, Request, Response, Router } from 'express';

const usersRoute = Router();

usersRoute.get('/', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Fran'}];
    res.status(200).send(users);
});

export default usersRoute;