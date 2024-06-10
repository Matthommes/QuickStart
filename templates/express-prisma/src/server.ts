import app from "./app";
import { disconnectPrisma } from "./config/prisma";
const port = process.env.PORT || 5000;

// Handle Database shutdown

const gracefulShutdown = async () => {
  await disconnectPrisma();
  console.log("Shutting down gracefully.");
  process.exit(0);
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
