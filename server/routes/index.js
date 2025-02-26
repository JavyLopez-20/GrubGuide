const apiRoutes = require("./api/index");
const router = express.Router();

router.use('/api', apiRoutes);

export default router;