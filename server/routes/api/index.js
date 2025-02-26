import { Router } from "express";
import { authRouter } from "./auth";
import { restaurantRouter } from "./restaurantSearch";
import { userRouter } from "./user";

const router = Router();

router.use('/auth', authRouter);
router.use('/restaurantSearch', restaurantRouter);
router.use('/user', userRouter);

export default router;