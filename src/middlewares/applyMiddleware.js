



const applyMiddleware = (app) => {
    // Middleware
    app.use(cors());
    app.use(express.json());
}