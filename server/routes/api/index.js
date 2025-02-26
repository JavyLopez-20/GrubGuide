const { authRouter } = require("./auth");
const { restaurantRouter } = requrie("./restaurantSearch");
const { userRouter } = require("./user");
const router = express.Router();

router.use('/auth', authRouter);
router.use('/restaurantSearch', restaurantRouter);
router.use('/user', userRouter);

export default router;